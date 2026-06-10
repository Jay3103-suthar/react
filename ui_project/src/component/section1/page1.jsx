import React from 'react'
import Navbar from './navbar'
import Page1content from './page1content'

const page1 = (props) => {
  return (
    <div className="h-screen w-full">
        <Navbar />
        <Page1content user={props.user} />
    </div>
  )
}

export default page1