import React from 'react'

const PersonForm = ({ addPerson, newName, newNumber, handleNameChange, handleNumberChange }) => {
    return (
        <form onSubmit={addPerson}>
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
    )
}

export default PersonForm