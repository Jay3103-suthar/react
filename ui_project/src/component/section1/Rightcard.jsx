import React from 'react'
import { ArrowRight } from 'lucide-react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
    return (
        <div className='relative w-1/3 h-full shrink-0 bg-white  rounded-4xl shadow-lg overflow-hidden '>
            <img className=" w-full h-full object-cover rounded-4xl" src={props.img} alt="" />

            <Rightcardcontent intro={props.intro} tag ={props.tag} id={props.id} color={props.color}/>
        </div>
    )
}

export default Rightcard