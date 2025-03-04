'use client'    
import React, { useState } from 'react';
import Button from './Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface NavBarProps {
    white?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({white = true}) => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative bg-transparent text-white">
            <div className="flex justify-between items-center px-4 md:px-20">
                <div className="cursor-pointer" onClick={() => router.push('/')}>
                    {white ? (
                        <Image
                            src="/images/l-logo.svg"
                            alt="Logo"
                            width={150}
                            height={150}
                            className="w-32 md:w-48"
                        />
                    ) : (
                        <Image
                            src="/images/l-logo.svg"
                            alt="Logo"
                            width={150}
                            height={150}
                            className="w-32 md:w-48 bg-primary/100"
                        />
                    )}
                </div>

                {/* Mobile menu button */}
                <button 
                    className="md:hidden p-2"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop menu */}
                <div className="hidden md:flex gap-4">
                    <Button 
                        onClick={() => router.push('/about-us')}
                        label="ÜBER UNS" 
                        variant="secondary" 
                    />
                    <Button 
                        onClick={() => router.push('/services')} 
                        label="UNSERE LEISTUNGEN" 
                        variant="secondary" 
                    />
                    <Button 
                        onClick={() => router.push('/contact')} 
                        label="KONTAKT" 
                        variant="primary" 
                    />
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col items-center gap-4 absolute w-full bg-primary py-4`}>
                <Button 
                    onClick={() => {
                        router.push('/about-us');
                        setIsMenuOpen(false);
                    }}
                    label="ÜBER UNS" 
                    variant="secondary" 
                />
                <Button 
                    onClick={() => {
                        router.push('/services');
                        setIsMenuOpen(false);
                    }}
                    label="UNSERE LEISTUNGEN" 
                    variant="secondary" 
                />
                <Button 
                    onClick={() => {
                        router.push('/contact');
                        setIsMenuOpen(false);
                    }}
                    label="KONTAKT" 
                    variant="primary" 
                />
            </div>
        </nav>
    );
};

export default NavBar;