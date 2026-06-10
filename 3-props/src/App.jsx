import React from 'react'
import Card from './component/card.jsx'

const App = () => {
  return (
    <div className='container'>

    <Card 
    user="jay"
    age={22}
    img="https://images.unsplash.com/photo-1771942202908-6ce86ef73701?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>

    <Card 
    user="maulik"
    age={25}
    img="https://images.unsplash.com/photo-1778100207121-2ee237397a43?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>

    <Card 
    user="darshil"
    age={20}
    img="https://images.unsplash.com/photo-1777868475398-ebe95fbb915e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D"/>

     
    </div>
  )
}

export default App