"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { Phone, Mail, Calendar, Home, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import CalendlyEmbed from '../common/CalendlyEmbed'

const contactInformations = [
    {
        icon: <Phone />,
        text: '+49 (0)152 56821468',
        action: 'tel:+4915256821468'
    },
    {
        icon: <Mail />,
        text: 'info@buehne-fawier.de',
        action: 'mailto:info@buehne-fawier.de'
    },
    {
        icon: <Calendar />,
        text: 'Wunschtermin direkt eintragen',
        action: 'calendar'
    },
    {
        icon: <Home />,
        text: 'Bühne & Fawier \nNachlassberatung \nDamte Str 36\n51674 Wiehl\nDeutschland'
    }
]

const Contact = () => {
    const [showCalendly, setShowCalendly] = useState(false)
    const router = useRouter()

    const handleClose = () => {
        router.back()
        setShowCalendly(false)
    }

    const handleClick = (action?: string) => {
        if (!action) return
        
        if (action === 'calendar') {
            setShowCalendly(true)
        } else {
            window.location.href = action
        }
    }

    return (
        <div className='flex justify-between items-center w-full h-screen'>
            {showCalendly ? (
                <div className='w-full h-full bg-primary'>
                    <div className='flex justify-end p-4'>
                        <X 
                            className='text-white stroke-[1.5] w-8 h-8 cursor-pointer' 
                            onClick={handleClose}
                        />
                    </div>
                    <CalendlyEmbed 

                        url="https://calendly.com/buehne-fawier-info/30min"
                        title="Zeitplan Zeitfenster"

                    />
                </div>
            ) : (
                <>
                    <div className='hidden md:flex bg-primary p-10 w-1/2 h-full justify-center items-center'>
                        <Image
                            src="/images/White_vert_logo.svg"
                            alt="logo"
                            width={420}
                            height={420}
                            priority
                        />
                    </div>
                    
                    <div className='md:w-1/2 w-full bg-secondary h-full'>
                        <div 
                            onClick={handleClose}
                            className='flex md:justify-end justify-between w-full md:p-4 px-4 cursor-pointer'>
                            <div className='md:hidden'>
                                <Image
                                    src="/images/Blue_Hori_logo.svg"
                                    alt="logo"
                                    width={100}
                                    height={100}
                                    priority
                                />
                            </div>
                            <X className='md:text-white stroke-[1.5] w-8 h-8 md:mt-0 mt-8 text-primary ' />
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <div className='rounded-full overflow-hidden md:w-[150px] w-[100px] md:h-[150px] h-[100px] ring-2 ring-white'>
                                <Image
                                    src="/images/expert.png"
                                    alt="person profile"
                                    width={200}
                                    height={200}
                                    className='w-full h-full object-cover'
                                    priority
                                />
                            </div>

                            <p className='text-primary md:text-4xl text-xl font-semibold text-center w-1/2 pb-3'>
                                Wir freuen uns
                                <br />
                                auf Ihre Nachricht.
                            </p>
                            
                            <div className='flex flex-col items-center ml-10 md:ml-20'>
                                {contactInformations.map((info, index) => (
                                    <div 
                                        key={index} 
                                        className='flex items-center gap-4 md:py-3 py-2 w-full cursor-pointer hover:opacity-80 transition-opacity'
                                        onClick={() => handleClick(info.action)}
                                    >
                                        <div className='text-white rounded-full border border-primary p-4 md:text-3xl text-xl font-semibold'>
                                            {info.icon}
                                        </div>
                                        <div className='text-primary md:text-base text-xs items-start'>
                                            {info.text.split("\n").map((line, i) => (
                                                <React.Fragment key={i}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Contact