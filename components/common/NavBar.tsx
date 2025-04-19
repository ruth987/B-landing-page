'use client'
import React, { useState } from 'react';
import Button from './Button';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface NavBarProps {
    white?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ white = true }) => {
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
        <nav className={`w-full bg-transparent text-white`}>
            <div className="flex justify-between items-center px-4 md:px-20 relative h-24 md:h-32">
                <div className="cursor-pointer" onClick={() => router.push('/')}>
                    {
                        white ? (
                            <Image
                                src="/images/Logo_Horizontal_Whitep.png"
                                alt="Logo"
                                width={150}
                                height={100}
                                className="w-28 md:w-48 h-24 md:h-28 "
                            />
                        ) : (
                            <Image
                                src="/images/Logo_Horizontal_Blackp.png"
                                alt="Logo"
                                width={150}
                                height={100}
                                className="w-28 md:w-48 h-24 md:h-28 "
                            />
                        )
                    }
                </div>

                {/* Mobile menu button */}
                <button
                    className="p-2 fixed top-10 right-4 md:right-20 bg-primary/40 backdrop-blur-sm rounded-full"
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

            </div>

            {/* Mobile menu */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} fixed top-24 right-0 bg-primary/30 justify-end md:px-20 px-4 py-4 rounded-bl-lg`}>
                <div className='flex flex-col gap-4 justify-end items-end'>
                    <Button
                        onClick={() => handleNavigation('promise')}
                        label="Unser Versprechen"
                        white={white}
                    />
                    <Button
                        onClick={() => handleNavigation('services')}
                        label="Unsere Leistungen"
                        white={white}
                    />
                    <Button
                        onClick={() => handleNavigation('about-us')}
                        label="Unsere Story"
                        white={white}
                    />
                    <Button
                        onClick={() => handleNavigation('faq')}
                        label="FAQ Vermögensverwertung"
                        white={white}
                    />
                    <Button
                        onClick={() => router.push("/contact")}
                        label="Kontakt"
                        white={white}
                    />
                    
                </div>
            </div>
        </nav>
    );
};

export default NavBar;