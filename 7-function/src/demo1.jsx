import React from 'react'

const demo1 = () => {
    function colorChange(){
        const box = document.querySelector('.box')
        box.style.backgroundColor = 'red'
    }
  return (
    <div>
        <div className="box"></div>
        <button onClick={colorChange}>Click me</button>
    </div>
  )
}

export default demo1