import React from 'react'
import Left from './left'
import Right from './right'

const page1content = (props) => {
  return (
    <div className = "py-5 px-10 gap-2 flex justify-between h-[90vh] items-center">
        <Left />
        <Right user={props.user} />
    </div>
  )
}

export default page1content