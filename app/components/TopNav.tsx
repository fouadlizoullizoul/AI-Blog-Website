import Image from 'next/image'
import React from 'react'

const TopNav = () => {
  return (
    <div className='h-12 px-2 flex justify-center items-center gap-2 my-2 md:text-base text-center '>
        <p className="text-gray-500 font-medium  text-[13px] ">
            Subscribe to our Newsletter For New & latest Blogs and Resources
        </p>
        <Image src="/Icon (1).png" width={15} height={14} alt=''/>
    </div>
  )
}

export default TopNav
