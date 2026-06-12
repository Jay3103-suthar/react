import React,{useState} from 'react'

const Demo = () => {
    const [num, setNum] = useState([10, 20, 30])
    const change = () => {
        const newNum = [...num];
        newNum.push(100);
        setNum(newNum);
    }
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={change}>Change</button>

    </div>
  )
}

export default Demo