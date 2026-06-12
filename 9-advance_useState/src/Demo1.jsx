import React,{useState} from 'react'

const Demo1 = () => {
    const [num, setNum] = useState({user:'jay', age: 22})
    const change = () => {    

        setNum(prev => ({...prev, user: 'jason', age: 23}))
    }
  return (
    <div>
      <h1>{num.user}</h1>
      <h1>{num.age}</h1>
      <button onClick={change}>Change</button>
    </div>
  )
}

export default Demo1