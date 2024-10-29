import { useState, useEffect } from 'react'
import useInput from './component/useInput'
import Filter from './component/Filter'
import PersonForm from './component/PersonForm'
import Persons from './component/Persons'
import PhoneBook from './services/PhoneBook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, handleNameChange, setNewName] = useInput('')
  const [newNumber, handleNumberChange, setNewNumber] = useInput('')
  const [newFilter, handleFilterChange] = useInput('')

  useEffect(() => {
    PhoneBook
      .getAll()
      .then(data => {
        setPersons(data)
      })
  }, [persons])

  const addPerson = (e) => {
    e.preventDefault()
    if (persons.some(person => newName === person.name) && persons.some(person => newNumber === person.number)) {
      alert(`${newName} (${newNumber}) is already added to phonebook`)
    } else {
      console.log()
      const newPerson = {
        "id": persons.length += 1,
        "name": newName,
        "number": newNumber
      }
      PhoneBook
        .create(newPerson)
        .then(data => {
          persons.concat(newPerson)
          setNewName('')
          setNewNumber('')
          console.log('New contact:', data)
        })
        .catch(err => {
          console.log('failed to add new contact:', err
          )
        })
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