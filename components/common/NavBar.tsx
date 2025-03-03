import React from 'react';
import Button from './Button';
import Image from 'next/image';
const NavBar: React.FC = () => {
    return (
        <nav className="flex justify-between items-center bg-transparent text-white px-20">
            <div className="">
                <Image
                    src="/images/l-logo.svg"
                    alt="Logo"
                    width={200}
                    height={200}
                />
            </div>
            <div className="flex gap-4">
                <Button label="ÜBER UNS" variant="secondary" />
                <Button label="UNSERE LEISTUNGEN" variant="secondary" />
                <Button label="KONTAKT" variant="primary" />
            </div>
        </nav>
    );
};

export default NavBar;