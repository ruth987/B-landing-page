import React from 'react'
import { Phone } from 'lucide-react';


const TopContact = () => {
  return (
    <div className='flex justify-center items-center bg-primary text-white font-bold text-center py-2 sticky top-0 text-sm z-50'>
        <Phone className='w-4 h-4' />
        <p className='px-2'>069 456 7890</p>
    </div>
  )
}

export default TopContact;