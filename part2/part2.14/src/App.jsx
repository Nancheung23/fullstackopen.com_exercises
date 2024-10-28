import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

const url = 'https://restcountries.com/v3.1/all'

const App = () => {
  const [newfilter, setNewfilter] = useState('')
  const [countries, setCountries] = useState([])
  const [selected, setSelected] = useState(null)
  const [capitalInfo, setCapitalInfo] = useState(null)
  const [weather, setWeather] = useState(null)
  const currentTime = useMemo(() => new Date(), [])

  // Fetch country data
  useEffect(() => {
    axios
      .get(url)
      .then(response => setCountries(response.data))
      .catch(err => console.error("Error fetching countries data:", err))
  }, [])

  // Filtered countries based on input
  const filteredCountries = useMemo(() => {
    return countries.filter(country =>
      country.name.common.toLowerCase().includes(newfilter)
    )
  }, [countries, newfilter])

  useEffect(() => {
    if (filteredCountries.length === 1) {
      const uniqueCountry = filteredCountries[0]
      if (uniqueCountry !== selected) {
        setSelected(uniqueCountry)
        setCapitalInfo(uniqueCountry.capitalInfo)
      }
    } else {
      setSelected(null)
      setCapitalInfo(null)
      setWeather(null)
    }
  }, [filteredCountries, selected])

  // Handle input change
  const handleFilterChange = (e) => {
    e.preventDefault()
    setNewfilter(e.target.value.toLowerCase())
  }

  // Fetch weather when capitalInfo changes
  useEffect(() => {
    if (capitalInfo && capitalInfo.latlng) {
      const [lat, lon] = capitalInfo.latlng
      const weatherUrl = `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${lat}&lon=${lon}`
      axios
        .get(weatherUrl)
        .then(response => setWeather(response.data))
        .catch(err => console.log("Error fetching weather data:", err))
    }
  }, [capitalInfo])

  const renderCountryDetails = (country) => (
    <div>
      <h2>{country.name.common}</h2>
      <p>{`Capital: ${country.capital ? country.capital[0] : 'N/A'}`}</p>
      <p>{`Area: ${country.area}`}</p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map(lang => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="150" />
    </div>
  )

  const handleCountrySelected = (country) => {
    setSelected(country)
    setCapitalInfo(country.capitalInfo)
  }

  const renderCountryList = () => (
    <ul>
      {filteredCountries.map(country => (
        <li key={country.ccn3}>
          {country.name.common}
          <input type="button" value="show" onClick={() => handleCountrySelected(country)} />
        </li>
      ))}
    </ul>
  )

  const renderWeatherInfo = () => {
    if (!weather || !weather.properties || !weather.properties.timeseries) return null
    const nextWeather = weather.properties.timeseries.find(item => new Date(item.time) > currentTime)
    const lastWeather = weather.properties.timeseries.filter(item => new Date(item.time) < currentTime).slice(-1)[0]

    const weatherData = nextWeather || lastWeather
    if (!weatherData) return <p>No weather data available.</p>

    return (
      <div>
        <h3>Weather in {selected.capital[0]}</h3>
        <p>Temperature: {weatherData.data.instant.details?.air_temperature ?? 'N/A'} °C</p>
        <p>Wind: {weatherData.data.instant.details?.wind_speed ?? 'N/A'} m/s</p>
      </div>
    )
  }

  const renderContent = () => {
    if (!newfilter) {
      return <p>Enter a country name to start searching.</p>
    }

    if (filteredCountries.length > 10) {
      return <p>Too many matches, specify another filter</p>
    }

    if (filteredCountries.length === 1 && selected) {
      return renderCountryDetails(selected)
    }

    return renderCountryList()
  }

  return (
    <div>
      <div>
        <label htmlFor="search">Find countries</label>
        <input id="search" onChange={handleFilterChange} value={newfilter} />
      </div>
      <div>
        {renderContent()}
        {selected && renderWeatherInfo()}
      </div>
    </div>
  )
}

export default App
