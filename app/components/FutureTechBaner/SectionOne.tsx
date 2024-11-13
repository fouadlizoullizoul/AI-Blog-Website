import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const SectionOne = () => {
  return (
//     <section className='xl:flex lg:flex md:flex max-sm:flex max-sm:flex-col max-sm:gap-1 bg-[#1A1A1A] px-4 lg:px-20 xl:px-40 min-h-[24vh]  items-center'>
//     <div className='flex flex-col gap-3 flex-1 max-sm:mt-4'>
//         <h3 className='text-[15px] bg-[#333333] rounded-sm mr-auto p-2'>Your Gateway to In-Depth Information</h3>
//         <h1 className='xl:text-3xl   lg:text-2xl md:text-2xl max-sm:text-sm'>
//         Unlock Valuable Knowledge with FutureTech's Resources
//         </h1>
//     </div>
//     <div className="flex flex-1 justify-center max-sm:justify-start"> 
//         <Button variant="outline" className="flex items-center">
//             View All Resources
//             <Image src="/Icon (1).png" alt="" width={15} height={15}/>
//         </Button>
//     </div>
// </section>
 <section className='flex flex-col gap-4 md:flex-row items-center bg-[#1A1A1A] px-4 py-6 lg:px-20 xl:px-40 min-h-[24vh]'>
      {/* النصوص */}
      <div className='flex flex-col gap-3 flex-1 md:mr-4'>
        <h3 className='text-[15px] bg-[#333333] rounded-sm p-2 md:w-max text-white'>
          Your Gateway to In-Depth Information
        </h3>
        <h1 className='text-sm md:text-2xl lg:text-2xl text-white'>
          Unlock Valuable Knowledge with FutureTech&apos;s Resources
        </h1>
      </div>
      {/* الزر */}
      <div className="flex flex-1 justify-center mt-4 md:mt-0 md:justify-end ">
        <Button variant="outline" className="flex items-center gap-2 px-4 py-2 text-sm md:text-base">
          View All Resources
          <Image src="/Icon (1).png" alt="" width={15} height={15} />
        </Button>
      </div>
    </section>
  )
}

export default SectionOne
