import { useState } from 'react'
import useInput from './component/useInput'
import Filter from './component/Filter'
import PersonForm from './component/PersonForm'
import Persons from './component/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }])
  const [newName, handleNameChange, setNewName] = useInput('')
  const [newNumber, handleNumberChange, setNewNumber] = useInput('')
  const [newFilter, handleFilterChange] = useInput('')

  const addPerson = (e) => {
    e.preventDefault()
    if (persons.some(person => newName === person.name) && persons.some(person => newNumber === person.number)) {
      alert(`${newName} (${newNumber}) is already added to phonebook`)
    } else {
      console.log('New contact:', newName, newNumber)
      setPersons(persons.concat({ name: newName, number: newNumber, id: persons.length + 1 }))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={newFilter} handler={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={newFilter} />
    </div>
  )
}

export default App