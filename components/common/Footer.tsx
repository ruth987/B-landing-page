import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='flex justify-between px-28 bg-primary text-white py-10'>
        <div className='flex gap-2'>
            <div>
                <Image
                 src="/images/l-logo-2.svg"
                 alt="logo"
                 width={100}
                 height={100}
                 className=''
                 />
            </div>
            <div className='text-secondary text-lg font-semibold'>
            Nachlass
            <br />
            optimal
            <br />
            verwerten.
            </div>
        </div>
        <div className='flex flex-col gap-10'>
            <div className=' text-sm '>
            Bühne & Fawier
            <br />
            XXXX
            <br />
            XXXX
            </div>
            <div className='flex gap-5 text-xs'>
                <p>Cookies</p>
                <p>Impressum</p>
                <p>Datenschutz</p>
                <p>Kontakt</p>
            </div>
        </div>

    </div>
  )
}

export default Footer