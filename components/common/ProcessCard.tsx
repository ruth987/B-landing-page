import React from 'react'
import { Button } from '../ui/button'

const ProcessCard = ({ step, title, description }: { step: number, title: string, description: string }) => {
    return (
        <div className='w-1/6 h-[300px] bg-secondary-text rounded-lg p-4 border-[0.8px] border-white flex flex-col justify-between'>
            <div className='flex text-secondary-text2 items-center'>
                <p className=' text-4xl pr-2'>{step}</p>
                <p className='text-xl'>{title}</p>
            </div>

            <p className='text-sm flex-1 pt-6'>{description}</p>

            {
                step === 1 && (
                    <Button className='bg-primary text-secondary mx-auto rounded-full text-xs'>
                        JETZT KONTAKTIEREN
                    </Button>
                )
            }
        </div>
    )
}

export default ProcessCard