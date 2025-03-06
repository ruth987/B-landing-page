import React from 'react'
import { Button } from '../ui/button'
import {useRouter} from 'next/navigation'

const OfferCard = ({number, title, description}: {number: number, title: string, description: string}) => {
  const router = useRouter();
  return (
    <div className='bg-white rounded-lg p-6 flex flex-col gap-6 md:w-[21vw] w-[90%] mx-6 md:mx-0 md:h-[55vh] h-[50vh] pb-10'>
        <div className='text-primary md:text-3xl text-2xl font-semibold border border-light-gray rounded-full w-12 h-12 flex items-center justify-center'>{number}</div>
        <div className='text-primary md:text-2xl text-xl font-semibold'>{title}</div>
        <div className='text-primary md:text-sm text-xs flex-1'>{description}</div>
        <Button className='bg-primary text-secondary rounded-full w-2/3 mx-auto md:text-base text-xs'
        onClick={() => router.push('/services')}
        >
          MEHR DAZU
        </Button>

    </div>
  )
}

export default OfferCard