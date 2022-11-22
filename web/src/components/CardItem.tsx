import IconCardItem from './../assets/Icons/IconCommuniti.svg'
import Image from 'next/image'
interface CardItemProps {
  title: string
  text: string
  icon?: number
}

export const CardItem = (props: CardItemProps) => {

  return ( 
    <div className="flex flex-row justify-items-center items-start w-[500px] h-[170px] py-6 rounded-lg bg-white">
      <div className="w-1/4 ml-4 mr-2">
        <Image src={IconCardItem} alt="Icon Card Item" className='w-[300px]' />
      </div>
      <div className="w-5/6 ml-2 mt-4 text-start ">
        <h2 className="font-bold text-2xl mb-4" >{props.title}</h2>
        <p className="w-[90%] text-left font-light text-base-3 ">{props.text}</p>
      </div>
    </div>
  )
}
