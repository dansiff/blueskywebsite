import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setHasScrolled(offset > 10);  // Set to true when scrolled down by 10px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const navBarClasses = `fixed top-0 inset-x-0 transition-colors duration-300 z-50 ${hasScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`;


    return (
        
        <div className="bg-white shadow-md">
            <nav className="container mx-auto p-4 flex justify-between items-center max-w-7xl">
               
                        <Image
                            src="/img/blueskyLogo.jpg"
                            alt="BlueSky Logo"
                            width={250}  // Adjust as needed
                            height={75}  // Adjust as needed
                            className="object-contain"
                        />
                        <span className="text-2xl font-bold text-blue-700"></span>
                   
                {/* ... rest of the navigation items ... */}

                <div className="hidden space-x-4 lg:flex lg:items-center">
                    {/* ... your navigation items for desktop ... */}
                    <ThemeChanger />
                </div>

                <Disclosure as="nav" className="lg:hidden">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                                {/* Hamburger icon for mobile menu */}
                            </Disclosure.Button>
                            <Disclosure.Panel className="flex flex-col px-4 pt-4 pb-4 space-y-1">
                                {/* ... your navigation items for mobile ... */}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </nav>
        </div>
    );
};

export default Navbar;
