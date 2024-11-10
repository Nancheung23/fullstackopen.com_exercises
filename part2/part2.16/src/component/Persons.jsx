import React from 'react'

const Persons = ({ persons, filter }) => {
    return (
        <div>
            {
                persons.length === 0 ?
                    '...' :
                    persons.filter(person => (
                        person.name.toLowerCase().includes(filter)
                    )).map((person) => (
                        <p key={person.id}>
                            {person.name} {person.number}
                        </p>
                    ))
            }
        </div>
    )
}

export default Persons