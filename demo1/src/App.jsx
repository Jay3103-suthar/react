import React from 'react'
import Card from './component/card.jsx'
import Navbar from './component/navbar.jsx'

const App = () => {
  return (
<>  <Navbar />

    <div className="card1">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    
</>
  )
}

export default App