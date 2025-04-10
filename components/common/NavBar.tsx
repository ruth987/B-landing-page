'use client'
import React, { useState } from 'react';
import Button from './Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface NavBarProps {
    white?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ white = true }) => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`relative bg-transparent text-white`}>
            <div className="flex justify-between items-center px-4 md:px-20">
                <div className="cursor-pointer" onClick={() => router.push('/')}>
                    {
                        white ? (
                            <Image
                                src="/images/White_hori_logo.svg"
                                alt="Logo"
                                width={150}
                                height={100}
                                className="w-32 md:w-48 h-48 -top-16 md:-top-12 absolute"
                            />
                        ) : (
                            <Image
                                src="/images/Blue_hori_logo.svg"
                                alt="Logo"
                                width={150}
                                height={100}
                                className="w-32 md:w-48 h-48 -top-16 md:-top-12 absolute"
                            />
                        )
                    }


                </div>

                {/* Mobile menu button */}
                <button
                    className="p-2"
                    onClick={toggleMenu}
                >
                    {white ? (
                        isMenuOpen ? <X strokeWidth={1} className=" md:w-10 md:h-10 w-6 h-6" />
                            : <Menu strokeWidth={1} className=" md:w-10 md:h-10 w-6 h-6" />
                    ) : (
                        isMenuOpen ? <X strokeWidth={1} className="text-primary md:w-10 md:h-10 w-6 h-6" />
                            : <Menu strokeWidth={1} className="text-primary md:w-10 md:h-10 w-6 h-6" />
                    )}
                </button>


                {/* Desktop menu */}
                {/* <div className="hidden md:flex gap-4 pt-4">
                    <Button 
                        onClick={() => router.push('/about-us')}
                        label="ÜBER UNS" 
                        variant='secondary'
                    />
                    <Button 
                        onClick={() => router.push('/services')} 
                        label="UNSERE LEISTUNGEN" 
                        variant='secondary'
                    />
                    <Button 
                        onClick={() => router.push('/contact')} 
                        label="KONTAKT" 
                        variant='primary'
                    />
                </div> */}
            </div>

            {/* Mobile menu */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} absolute w-full bg-transparent justify-end md:px-20 px-4 py-4`}>
                <div className='flex flex-col gap-4 justify-end items-end -space-y-4 md:space-y-0'>

                    <Button
                        onClick={() => {
                            document.getElementById('about-us')?.scrollIntoView({behavior: 'smooth'});
                            setIsMenuOpen(false);
                        }}
                        label="ÜBER UNS"
                        white={white}
                    />
                    <Button
                        onClick={() => {
                            document.getElementById('services')?.scrollIntoView({behavior: 'smooth'});
                            setIsMenuOpen(false);
                        }}
                        label="UNSERE LEISTUNGEN"
                        white={white}
                    />
                    <Button
                        onClick={() => {
                            document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
                            setIsMenuOpen(false);
                        }}
                        label="KONTAKT"
                        white={white}
                    />
                </div>

            </div>
        </nav>
    );
};

export default NavBar;