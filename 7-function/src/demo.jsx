import React from 'react'

const demo = () => {
    function inputchange(e){
        console.log(e.target.value)
    }
  return (
    <div>
        <input onChange={inputchange} type="text" placeholder='Enter name ' />
    </div>
  )
}

export default demo