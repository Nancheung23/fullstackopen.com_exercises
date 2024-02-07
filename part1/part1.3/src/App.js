const Header = (props) => {
  console.log(props)
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <p>

    </p>
  )
}
const Content = (props) => {
  console.log(props)
  const parts = props.content.map(part => <p>{part.name} {part.exercises}</p>)
  return (
    <div>
      {parts}
    </div>
  )
}


const Total = (props) => {
  console.log(props)
  let sum = 0
  const total = props.exercises.forEach(part => sum += part.exercises)
  return (
    <div>
      Total: {sum}
    </div>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const content = [part1, part2, part3]

  return (
    <div>
      <Header course={course}/>
      <Content content={content}/>
      <Total exercises={content}/>
    </div>
  )
}

export default App