import React from 'react'

const ProcessCard = ({ step, title, description }: { step: number, title: string, description: string }) => {
    return (
        <div className='md:w-1/5 w-5/6 h-[350px] bg-white text-primary rounded-lg p-4 border-[0.8px] border-white flex flex-col justify-center md:justify-between'>
            <div className='flex text-primary items-center'>
                <p className=' text-4xl pr-2'>{step}</p>
                <p className='text-xl'>{title}</p>
            </div>

            <p className='text-sm flex-1 pt-6'>{description}</p>
{/* 
            {
                step === 1 && (
                    <Button 
                    onClick={() => window.open('mailto:info@nachlass-verwerten.de')}
                    className='bg-primary text-secondary mx-auto rounded-full text-xs hover:bg-secondary hover:text-primary hover:border-white hover:border'>
                        JETZT KONTAKTIEREN
                    </Button>
                )
            } */}
        </div>
    )
}

export default ProcessCard