"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Linkedin } from 'lucide-react'

const Footer = () => {
    const router = useRouter();

    const handleSocialClick = (url: string) => {
        window.open(url, '_blank')
    }

    return (
        <div className='flex justify-between md:px-28 px-4 bg-primary text-white md:py-10 py-6'>
            <div className='flex gap-2 cursor-pointer' onClick={() => router.push('/')}>
                <div className="cursor-pointer" onClick={() => router.push('/')}>
                    <Image
                        src="/images/Logo_Whitep.png"
                        alt="logo"
                        width={110}
                        height={110}
                        className='md:w-[150px] w-[70px] h-full'
                    />
                </div>
            </div>
            <div className='flex flex-col md:gap-10 gap-4'>
                <div className='md:text-sm text-[10px]'>
                    Bühne & Fawier GbR
                    <br />
                    Damte Str 36
                    <br />
                    51674 Wiehl
                </div>
                <div className='flex flex-col gap-4'>
                <div className='flex gap-4 items-center'>
                        <Image
                        onClick={() => handleSocialClick('https://x.com/buehnefawier')}
                         src="/images/twitter-logo.png" alt="X" width={27} height={27}
                         className='cursor-pointer hover:text-gray-300' />
                        <Linkedin
                            className='w-5 h-5 cursor-pointer hover:text-gray-300'
                            onClick={() => handleSocialClick('https://linkedin.com/company/buehne-fawier')}
                        />
                    </div>
                    <div className='flex md:gap-5 gap-2 text-[10px] md:text-xs'>
                        <p className='cursor-pointer' onClick={() => router.push('/cookies')}>Cookies</p>
                        <p className='cursor-pointer' onClick={() => router.push('/impressum')}>Impressum</p>
                        <p className='cursor-pointer' onClick={() => router.push('/datenschutz')}>Datenschutz</p>
                        <p className='cursor-pointer' onClick={() => router.push('/contact')}>Kontakt</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer