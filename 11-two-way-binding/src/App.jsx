import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    alert('Form submitted!'+' ' + name  )
    setName('')
    setEmail('')
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input 
          type="text" 
          placeholder='Enter your name' 
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />
        <input 
          type="email" 
          placeholder='Enter your email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App