import { useState } from "react"

const App = () => {
  const [a, setA] = useState(0)

  function changeA() {
    setA(a + 1)
  }
  function changeb() {
    setA(a - 1)
  }
  return (
    <div>
      <h1> {a}</h1>
      <button onClick={changeA}>increment</button>
      <button onClick={changeb}>decrement</button><br />
      <button onClick={() => setA(0)}>reset</button>
    </div>
  )
}

export default App