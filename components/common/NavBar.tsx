'use client'
import React, { useState } from 'react';
import Button from './Button';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

interface NavBarProps {
    white?: boolean;
}

const NavBar: React.FC<NavBarProps> = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (id: string) => {
        if (pathname === '/') {
            document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
        } else {
            router.push(`/#${id}`);
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="w-full bg-primary text-white fixed top-0 z-50">
            <div className="flex justify-between items-center px-4 md:px-20 h-16">
                {/* Left section with logo */}
                <div className="cursor-pointer" onClick={() => router.push('/')}>
                    <Image
                        src="/images/Logo_Horizontal_Whitep.png"
                        alt="Logo"
                        width={150}
                        height={100}
                        className="w-20 md:w-36 h-24 pt-3"
                    />
                </div>

                {/* Center section with phone */}
                <div className="flex items-center">
                    <Phone className="w-4 h-4" />
                    <p className="px-2 text-xs md:text-sm">+49 (0)152 5682 1468</p>
                </div>

                {/* Right section with menu button */}
                <button
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? 
                        <X strokeWidth={1} className="w-6 h-6" /> :
                        <Menu strokeWidth={1} className="w-6 h-6" />
                    }
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-full right-0 bg-primary/50 w-full md:w-auto justify-end md:px-20 px-4 py-4 border-t border-white/20`}>
                <div className='flex flex-col gap-4 justify-end items-end'>
                    <Button
                        onClick={() => handleNavigation('promise')}
                        label="Unser Versprechen"
                        white={true}
                    />
                    <Button
                        onClick={() => handleNavigation('services')}
                        label="Unsere Leistungen"
                        white={true}
                    />
                    <Button
                        onClick={() => handleNavigation('about-us')}
                        label="Über uns"
                        white={true}
                    />
                    <Button
                        onClick={() => handleNavigation('faq')}
                        label="FAQ Vermögensverwertung"
                        white={true}
                    />
                    <Button
                        onClick={() => router.push("/contact")}
                        label="Kontakt"
                        white={true}
                    />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;