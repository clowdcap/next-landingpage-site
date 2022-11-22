import { AiOutlineStar } from 'react-icons/ai'
import { AiOutlineTrophy } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'

import Image from "next/image"
import Git from './../assets/git.png'
import Peoples from './../assets/people.png'

interface CardProps {
  active?: boolean
}

export const CardBox = (props: CardProps) => {
  if (props.active) {
    return (
      <>
        <div className="  shadow-2xl shadow-gray-300 flex flex-col gap-4 bg-white  m-auto border p-12 rounded-xl">
          <p className='flex flex-row gap-2 text-xl items-center font-medium '><AiOutlineStar  className='text-base-1 font-medium text-3xl'/> 4.8 Rating</p>
          <p className='flex flex-row items-center gap-1 text-lg'>
            <Image src={Peoples} alt="Peoples" /> 
            <span className='text-base-1 font-medium text-lg'>+836k</span> 
            Members
          </p>
  
          <p className='flex flex-row flex-wrap w-full leading-7 font-light text-base-3 text-xl'>
            More than 2 billion we people over countries use socibooks we to stay in
            touch with friends.
          </p>
  
          <p className='text-base-1 font-medium text-lg mt-8 flex flex-row items-center gap-4'>Join Our Community    <BsArrowRight /></p>
      
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="flex flex-col gap-4 bg-white  m-auto border p-12 rounded-xl">
          <p className='flex flex-row gap-2 text-xl items-center font-medium '><AiOutlineTrophy  className='text-base-1 font-medium text-3xl'/> Awwwards</p>
          <p className='flex flex-row items-center gap-1 text-lg'>
            <Image src={Git} alt="Peoples" />Best of <span className='text-base-1 font-medium '>2021</span> on Github
          </p>
  
          <p className='flex flex-row flex-wrap w-full leading-7 font-light text-base-3 text-xl'>
            More than 2 billion we people over countries use socibooks we to stay in
            touch with friends.
          </p>
  
          <p className='font-medium text-lg mt-8 flex flex-row items-center gap-4'>Go To Awards <BsArrowRight /></p>
      
        </div>
      </>
    )
  }
}
