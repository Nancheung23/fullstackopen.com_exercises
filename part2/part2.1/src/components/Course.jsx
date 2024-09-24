import React from 'react'

const Course = ({ course }) => {
    return (
        <div>
            <h1>{course.name}</h1>
            <div>
                {course.parts.map(part =>
                    <p key={part.id}>
                        {part.name} {part.exercises}
                    </p>
                )}
            </div>
        </div>
    )
}

export default Course