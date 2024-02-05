import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY < 50); // If the scroll position is less than 50px, the user is at the top
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Adjust the opacity based on the scroll position
    const navbarStyles = `fixed top-0 inset-x-0 z-50 p-4 flex justify-between items-center max-w-7xl transition-opacity duration-300 ${isAtTop ? "opacity-100" : "opacity-0"
        }`;

    return (
        <nav className={navbarStyles}>
            {/* Logo and brand name */}
            <span className="text-white ml-28 text-xl font-bold">BlueSky</span>

            {/* Navigation Links */}
            <div className="hidden md:flex md:space-x-4 md:items-center" style={{ marginLeft: '20px', marginTop: '20px'} }>
                {/* Your other navigation items */}
                {/* ... */}

                {/* Get Started Button */}
                <a
                    href="https://form.jotform.com/240085201242138"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 inline-block text-lg font-medium text-center text-white bg-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300 ease-in-out hover:bg-white hover:text-black"
                >
                    Get Started
                </a>
            </div>

            {/* Mobile Menu Button */}
            {/* Insert hamburger icon button here */}
        </nav>
    );
};

export default Navbar;