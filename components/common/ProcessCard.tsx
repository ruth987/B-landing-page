import React from 'react'

const ProcessCard = ({ step, subtitle, title, description, bolddescription }: { step: string, subtitle: string, title: string, description: string, bolddescription: string }) => {
    return (
        <div className='md:w-1/4 w-5/6 md:h-[420px] h-[500px] bg-white text-primary rounded-lg p-4 border-[0.8px] border-white flex flex-col justify-center md:justify-between'>
            <div className='flex text-primary items-center'>
                <p className=' text-4xl pr-2'>{step}</p>
                <p className='text-xl'>{title}</p>
            </div>
            <p className='text-sm flex-1 pt-6'>{subtitle}</p>
            <p className='text-sm flex-1 pt-6'>{description}</p>
            <p className='text-sm flex-1 pt-6 font-bold'>{bolddescription}</p>
        </div>
    )
}

export default ProcessCard
