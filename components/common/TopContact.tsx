import React from 'react'
import { Phone } from 'lucide-react';


const TopContact = () => {
  return (
    <div className='flex justify-center items-center bg-primary text-white font-bold text-center py-2 sticky top-0 text-xs md:text-sm z-50'>
        <Phone className='w-4 h-4' />
        <p className='px-2'>+49 (0)152 5682 1468</p>
    </div>
  )
}

export default TopContact;