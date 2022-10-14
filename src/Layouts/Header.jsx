import React from 'react'
import { Button, SearchInput } from '../Components'

const Header = () => {
  return (
    <header
      className='flex items-center justify-between px-6 py-4 bg-[#EDEDED]'>
      {/* Name of Farm */}
      <h2
        className='text-black font-bold text-[24px] leading-[29px]'>
          FARM NAME: EJAS FARMS
      </h2>
      <div className="flex gap-[1.5rem]">
        <SearchInput />
        <Button 
          text={'Logout'}/>
      </div>
      </header>
  )
}

export default Header