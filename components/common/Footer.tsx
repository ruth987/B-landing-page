"use clientx"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const Footer = () => {
    const router = useRouter();
  return (
    <div className='flex justify-between md:px-28 px-4 bg-primary text-white md:py-10 py-6'>
        <div className='flex gap-2'>
            <div className="cursor-pointer" onClick={() => router.push('/')}>
                <Image
                 src="/images/White_vert_logo.svg"
                 alt="logo"
                 width={110}
                 height={110}
                 className='md:w-[150px] w-[70px] h-full'
                 />
            </div>
            <div className='text-secondary md:text-lg text-[10px] font-semibold flex items-center'>
            Nachlass
            <br />
            optimal
            <br />
            verwerten.
            </div>
        </div>
        <div className='flex flex-col md:gap-10 gap-4'>
            <div className='md:text-sm text-[10px]'>
            Bühne & Fawier
            <br />
            XXXX
            <br />
            XXXX
            </div>
            <div className='flex md:gap-5 gap-2 text-[10px] md:text-xs'>
                <p className='cursor-pointer' onClick={() => router.push('/cookies')}>Cookies</p>
                <p className='cursor-pointer' onClick={() => router.push('/impressum')}>Impressum</p>
                <p className='cursor-pointer' onClick={() => router.push('/datenschutz')}>Datenschutz</p>
                <p className='cursor-pointer' onClick={() => router.push('/contact')}>Kontakt</p>
            </div>
        </div>

    </div>
  )
}

export default Footer