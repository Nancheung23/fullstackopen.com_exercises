const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      {props.course.parts.map((part, index) => (
        <p key={index}>{part.name} {part.exercises}</p>
      ))}
    </>
  )
}


const Total = (props) => {
  const totalExercises = props.course.parts.reduce((sum, part) => sum += part.exercises, 0)
  return (
    <>
      <p>Number of exercises {totalExercises}s</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      {/* <Content name={part1.name} exercises={part1.exercises} />
      <Content name={part2.name} exercises={part2.exercises} />
      <Content name={part3.name} exercises={part3.exercises} /> */}
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}
export default App