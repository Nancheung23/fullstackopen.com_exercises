import { useState, useEffect } from 'react'
import useInput from './component/useInput'
import Filter from './component/Filter'
import PersonForm from './component/PersonForm'
import Persons from './component/Persons'
import PhoneBook from './services/PhoneBook'

// check db run script in package.json

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
  }, [])

  const addPerson = (e) => {
    e.preventDefault()
    if (persons.some(person => newName === person.name.toLowerCase()) && persons.some(person => newNumber === person.number)) {
      console.log(`detect same name: ${newName}, same number: ${newNumber}`)
      alert(`${newName} (${newNumber}) is already added to phonebook`)
      setNewName('')
      setNewNumber('')
      return
    }
    if (persons.some(person => newName === person.name.toLowerCase())) {
      console.log(`detect same name: ${newName}, with new number: ${newNumber}`)
      // for PUT method
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const personId = persons.find(person => person.name.toLowerCase() === newName).id
        // update data
        PhoneBook.update(personId,
          persons.map(person => personId === person.id ? { ...person, number: newNumber } : person).find(person => person.id === personId)

        ).then(data => console.log('response from server:', data)
        )

        // display => debug
        setPersons(prevPersons => prevPersons.map(p => p.id === personId ? { ...p, number: newNumber } : p))
        setNewName('')
        setNewNumber('')
      } else {
        return
      }
    } else {
      console.log()
      const newPerson = {
        "id": persons.length += 1,
        "name": newName.split(' ').map(p => p.chatAt(0).toUpperase() + p.slice(1).toLowerCase()).join(' '),
        "number": newNumber
      }
      PhoneBook
        .create(newPerson)
        .then(data => {
          // use set Persons instead of concat because useState will listen persons' change
          setPersons(prevPersons => [...prevPersons, data])
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

  const handleDeletePerson = (person) => {
    if (persons.includes(person)) {
      PhoneBook
        .del(person.id)
        .catch(err => alert(`person ${person.id}was already removed from server`, err))
      setPersons(persons => persons.filter(p => p.id !== person.id))
    } else {
      return
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
      <Persons persons={persons} filter={newFilter} onContactChange={handleDeletePerson} />
    </div>
  )
}

export default App