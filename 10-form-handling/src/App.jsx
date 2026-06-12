import React from 'react'

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    alert('Form submitted!')
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Enter your name' /><br />
        <input type="email" placeholder='Enter your email' /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App