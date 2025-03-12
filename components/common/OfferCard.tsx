import React, { useState } from 'react'
import { Button } from '../ui/button'
import {useRouter} from 'next/navigation'

const OfferCard = ({number, title, description}: {number: number, title: string, description: string}) => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-white rounded-lg p-6 flex flex-col gap-6 md:w-[21vw] w-[90%] mx-6 md:mx-0 ${isExpanded ? 'h-auto' : 'h-[400px]'} pb-10`}>
        <div className='text-primary md:text-3xl text-2xl font-semibold border border-light-gray rounded-full w-12 h-12 flex items-center justify-center'>{number}</div>
        <div className='text-primary md:text-2xl text-xl font-semibold'>{title}</div>
        <div className='text-primary md:text-sm text-xs flex-1'>
          <p className={!isExpanded ? 'line-clamp-3' : ''}>
            {description}
          </p>
          {description.length > 150 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary md:text-sm text-xs hover:underline font-semibold mt-2"
            >
              {isExpanded ? 'Weniger Anzeigen' : '... Mehr'}
            </button>
          )}
        </div>
        <Button className='bg-primary text-secondary rounded-full w-2/3 mx-auto md:text-base text-xs'
        onClick={() => router.push('/services')}
        >
          MEHR DAZU
        </Button>

    </div>
  )
}

export default OfferCard