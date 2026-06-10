import React from 'react'
import Section1 from './component/section1/page1'
import Section2 from './component/section2/page2'

const App = () => {
  const user = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661741416773-8751741873a3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Enjoys seamless banking services, easy transactions, and reliable financial support for everyday needs.',
      tag: 'Satisfied',
      color: 'blue',

    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Has limited access to quality financial products and seeks better banking opportunities and support.',
      tag: 'Underserved',
      color: 'purple',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661506425012-b781fe828e02?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Uses banking services occasionally but lacks access to affordable credit and advanced financial tools.',
      tag: 'UnderBanks',
      color: 'pink',
    },

    {
      img: 'https://plus.unsplash.com/premium_photo-1661773765181-39af5e78530f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Needs greater financial inclusion, personalized banking solutions, and easier access to essential services.',
      tag: 'UnderBanks',
      color: 'lightblue',
    }

  ]
  return (
    <div className="h-screen w-100vh ">
      <Section1 user={user} />

    </div>
  )
}

export default App