import { useState } from 'react'

const Title = ({ title }) =>
  <h1>
    {title}
  </h1>

const Button = ({ handleClick, text }) =>
  <button onClick={handleClick}>
    {text}
  </button>

const Display = ({ total }) => {
  return (
    <div>
      <p>good {total[0]}</p>
      <p>neutral {total[1]}</p>
      <p>bad {total[2]}</p>
    </div>
  )
}

const App = () => {
  const title = 'give feedback'
  const statistics = 'statistics'
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState([0, 0, 0])

  const handleGoodClick = () => {
    const newGood = good + 1
    setGood(newGood)
    setTotal([newGood, neutral, bad])
  }

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    setTotal([good, newNeutral, bad])
  }

  const handleBadClick = () => {
    const newBad = bad + 1
    setBad(newBad)
    setTotal([good, neutral, newBad])
  }

  return (
    <div>
      <Title title={title} />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Title title={statistics} />
      <Display total={total} />
    </div>
  )
}

export default App