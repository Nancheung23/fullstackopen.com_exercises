const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      {props.parts.map((part, index) => (
        <p key={index}>{part.name} {part.exercises}</p>
      ))}
    </>
  )
}


const Total = (props) => {
  const totalExercises = props.parts.reduce((sum, part) => sum += part.exercises, 0)
  return (
    <>
      <p>Number of exercises {totalExercises}s</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
      exercises: 1
    }
  ]

  return (
    <div>
      <Header course={course} />
      {/* <Content name={part1.name} exercises={part1.exercises} />
      <Content name={part2.name} exercises={part2.exercises} />
      <Content name={part3.name} exercises={part3.exercises} /> */}
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
export default App