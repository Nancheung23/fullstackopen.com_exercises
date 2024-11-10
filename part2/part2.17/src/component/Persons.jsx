import React from 'react'

const Persons = ({ persons, filter, onContactChange }) => {
    const handleDeleteContact = (name) => {
        if (window.confirm(`Delete ${name}`)) {
            onContactChange(persons.find(person => person.name === name))
        } else {
            return
        }
    }
    return (
        <div>
            {
                persons.length === 0 ?
                    '...' :
                    persons.filter(person => (
                        person.name.toLowerCase().includes(filter)
                    )).map((person) => (
                        <p key={person.id}>
                            <span>
                                {person.name} {person.number}
                            </span>

                            <button onClick={() => handleDeleteContact(person.name)}>
                                delete
                            </button>
                        </p>
                    ))
            }
        </div>
    )
}

export default Persons