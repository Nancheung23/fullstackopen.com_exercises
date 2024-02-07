const Hello = () => {
  return(
    <div>
      <p>Hello World</p>
    </div>
  )
}

const HelloNew = (props) => {
  return(
    <div>
      <p>Hello {props.name}, your age is {props.age}</p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log('Hello from component')

  const name = "nan"
  const age = 26
  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello/>
      <Hello/>
      <Hello/>
      <HelloNew name="Nancheung" age="26"/>
      <HelloNew name={name} age={age}/>
    </div>)
}

export default App