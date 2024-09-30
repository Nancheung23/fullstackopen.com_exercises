import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1 }
  ])
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (e) => {
    e.preventDefault()
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    e.preventDefault()
    setNewNumber(e.target.value)
  }

  const addInfo = (e) => {
    e.preventDefault()
    if (persons.some(person => newName === person.name) && persons.some(person => newNumber === person.number)) {
      alert(`${newName} (${newNumber}) is already added to phonebook`)
    } else {
      console.log(newName)
      console.log(newNumber)
      setPersons(persons.concat({ name: newName, number: newNumber, id: persons.length + 1 }))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addInfo}>
        <div>
          <div>
            name: <input onChange={handleNameChange} value={newName} />
          </div>
          <div>
            number: <input onChange={handleNumberChange} value={newNumber} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.length === 0 ? '...' : persons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ))}
      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default App