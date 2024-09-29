import React from 'react'

const Course = ({ course }) => {
    return (
        <div>
            <h1>{course.name}</h1>
            <div>
                {
                    course.parts.map(part =>
                        <p key={part.id}>
                            {part.name} {part.exercises}
                        </p>
                    )}
            </div>
            <h4>total of {
                course.parts.reduce((sum, part) => {
                    return part.exercises + sum
                }, 0)
            } exercises</h4>
        </div>
    )
}

export default Course