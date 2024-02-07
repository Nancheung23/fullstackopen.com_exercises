const Header = (props) => {
  console.log(props.header.name)
  return (
    <h1>{props.header.name}</h1>
  )
}

const Content = (props) => {
  const parts = props.content.parts.map((part, key) =>
  // need to have key index
    <p key={key}> {part.name} {part.exercises}</p>)
  return (
    <div>
      {parts}
    </div>
  )
}

const Total = (props) => {
  let sum = 0
  props.total.parts.forEach(part => {
    sum += part.exercises
  })
  sum = <p>Total exercises: {sum}</p>
  return(
    <div>
      {sum}
    </div>
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
      <Header header={course} />
      <Content content={course} />
      <Total total={course}/>
    </div>
  )
}

export default App