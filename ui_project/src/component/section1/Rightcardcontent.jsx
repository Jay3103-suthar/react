import React from 'react'
import { ArrowRight } from 'lucide-react'

const Rightcardcontent = (props) => {
  return (
    <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between p-2'>
                <h2 className='text-black bg-amber-50 rounded-full text-xl m-4 w-10 h-10 flex items-center justify-center py-4 font-semibold'>{props.id + 1}</h2>


                <div className='w-full  bg-opacity-80 p-4'>
                    <p className='text-lg leading-relaxed text-gray-600 mb-14'>
                        {props.intro}
                    </p>


                    <div className='w-full flex justify-between bg-opacity-80 py-4'>
                        <button style={{backgroundColor:props.color}} className=' text-white px-8 py-2  text-medium   rounded-full '>{props.tag}</button>
                        <button style={{backgroundColor:props.color}} className=' text-white px-2 py-2  text-medium   rounded-full '>
                            <ArrowRight />
                        </button>
                    </div>
                </div>
            </div>
  )
}

export default Rightcardcontent