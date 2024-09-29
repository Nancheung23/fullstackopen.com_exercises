import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = (e) => {
    e.preventDefault()
    setNewName(e.target.value)
    console.log(newName)

  }

  const addName = (e) => {
    e.preventDefault()
    setPersons(persons.concat({ name: newName }))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.length === 0 ? '...' : persons.map((person) => (
        <p key={person.name}>
          {person.name}
        </p>
      ))}
      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default App