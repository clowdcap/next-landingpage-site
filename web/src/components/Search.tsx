import { AiOutlineSearch } from 'react-icons/ai'

export const Search = () => {
  return (
    <div className='relative'>
      <AiOutlineSearch className='absolute top-[12px] left-1 outline-none active:outline-none' />
      <input type="search" placeholder="Search Here..."  className="pb-4 pl-6 w-[120px] border-b-2"/>
    </div>
  )
}
