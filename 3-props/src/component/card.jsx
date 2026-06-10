import React from 'react'

const Card = (props) => {
  return (
    

      <div className="card">
        <h2>Hey {props.user}</h2>
        <p>Age: {props.age}</p>
        <img src={props.img} alt="" />
        <p>Welcome to React Props</p>
        <button>Click Me</button>
      </div>


     
   
  )
}

export default Card