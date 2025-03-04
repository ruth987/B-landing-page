import Image from 'next/image'
import React from 'react'

const EstateServiceCard = ({image, title, description}: {image: string, title: string, description: string}) => {
  return (
    <div className="flex flex-col items-center text-center w-full md:w-1/4">
            <Image
              src={image}
              alt={title}
              className="w-full max-w-md shadow-lg"
              width={100}
              height={100}
            />
            <h3 className="text-left text-2xl font-bold text-gray-900 mt-6">{title}</h3>
            <p className="text-left text-sm text-gray-600 mt-4">{description}</p>
          </div>
  )
}

export default EstateServiceCard