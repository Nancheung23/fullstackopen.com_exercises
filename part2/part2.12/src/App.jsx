import { useState, useEffect } from 'react'
import axios from 'axios'

const url = 'https://restcountries.com/v3.1/all'

const App = () => {
  const [newfilter, setNewfilter] = useState('')
  const [countries, setCountries] = useState([])

  // Fetch country data
  useEffect(() => {
    axios
      .get(url)
      .then(response => setCountries(response.data))
    console.log('render', countries.length, 'countries')
  }, [countries.length])

  // Handle input change
  const handleFilterChange = (e) => {
    e.preventDefault()
    setNewfilter(e.target.value.toLowerCase())
  }

  // Filter countries based on input
  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(newfilter)
  )

  // Display single country details
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

  // Display country list
  const renderCountryList = (countries) => (
    <ul>
      {countries.map(country => (
        <li key={country.ccn3}>{country.name.common}</li>
      ))}
    </ul>
  )

  // Main render logic based on filter input
  const renderContent = () => {
    if (!newfilter) {
      return <p>Enter a country name to start searching.</p>
    }

    if (filteredCountries.length > 10) {
      return <p>Too many matches, specify another filter</p>
    }

    if (filteredCountries.length === 1) {
      return renderCountryDetails(filteredCountries[0])
    }

    return renderCountryList(filteredCountries)
  }

  return (
    <div>
      <div>
        <label htmlFor="search">Find countries</label>
        <input id="search" onChange={handleFilterChange} value={newfilter} />
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  )
}

export default App
