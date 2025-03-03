import Image from 'next/image'
import React from 'react'
import { Phone, Mail, Calendar, Home } from 'lucide-react'

const contactInformations = [
    {
        icon: <Phone />,
        text: '069 456 7890'
    },
    {
        icon: <Mail />,
        text: 'beratung@buehne-fawier.de'
    },
    {
        icon: <Calendar />,
        text: 'Wunschtermin direkt eintragen'
    },
    {
        icon: <Home />,
        text: 'Bühne & Fawier \nNachlassberatung \nXXXXXX'
    }
]
const Contact = () => {
    return (
        <div className='flex justify-between items-center w-full h-screen'>

            <div className='bg-primary p-10 w-1/2 h-full flex justify-center items-center'>
                <Image
                    src="/images/l-logo-2.svg"
                    alt="logo"
                    width={300}
                    height={300}
                />

            </div>
            <div className='w-1/2 h-full flex flex-col justify-center items-center bg-secondary'>
                <div className='rounded-full overflow-hidden w-[150px] h-[150px] ring-2 ring-white'>
                    <Image
                        src="/images/expert.png"
                        alt="person profile"
                        width={200}
                        height={200}
                        className='w-full h-full object-cover'
                    />
                </div>

                <p className='text-primary text-4xl font-semibold text-center w-1/2 py-5 '>
                    Wir freuen uns
                    <br />
                    auf Ihre Nachricht.
                </p>
                <div className='flex flex-col items-center ml-20'>
                    {
                        contactInformations.map((info, index) => (
                            <div key={index} className='flex items-center gap-4 py-3 w-full' >
                                <div className='text-white rounded-full border border-primary p-4 text-3xl font-semibold'>
                                    {info.icon}
                                </div>
                                <div className='text-primary items-start'>
                                    {info.text.split("\n").map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact

