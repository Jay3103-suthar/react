import React from 'react'

function App() {

  const name = 'React';
  const age = 10;
  return (
<>  
    <div className='card'>
      <h1 id='papa'>Hello, {name}!</h1>
      <p id='beta'>Welcome to your {name} application.</p>
      <p>You are {age} years old.</p>
    </div></>
  )
}

export default App