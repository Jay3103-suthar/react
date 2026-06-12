import React,{useState} from 'react'

const App = () => {
  const [num, setNum] = useState({user:'jay', age: 22})
  const change = () => {    

    const newNum = {...num};
    newNum.user = 'jason';
    newNum.age = 23;
    setNum(newNum);
  }
  return (
    <div>
      <h1>{num.user}</h1>
      <h1>{num.age}</h1>
      <button onClick={change}>change</button>
    </div>
  )
}

export default App