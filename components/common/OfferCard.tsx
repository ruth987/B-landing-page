import React from 'react'
import { Button } from '../ui/button'

const OfferCard = ({number, title, description}: {number: number, title: string, description: string}) => {
  return (
    <div className='bg-white rounded-lg p-6 flex flex-col gap-6 w-[21vw] h-[55vh] pb-10'>
        <div className='text-primary text-3xl font-semibold border border-light-gray rounded-full w-12 h-12 flex items-center justify-center'>{number}</div>
        <div className='text-primary text-2xl font-semibold'>{title}</div>
        <div className='text-primary text-sm flex-1'>{description}</div>
        <Button className='bg-primary text-secondary rounded-full w-2/3 mx-auto'>MEHR DAZU</Button>

    </div>
  )
}

export default OfferCard