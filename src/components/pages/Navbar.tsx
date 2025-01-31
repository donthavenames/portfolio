import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer.tsx';

const Navbar: React.FC = () => {
    const [click, setClick] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`bg-transparent h-60 flex justify-between items-center text-lg sticky top-0 z-[999] px-6 ${
                    scrolled ? 'opacity-0' : 'opacity-100'
                } transition-opacity duration-300`}
            >
                <div className="flex items-center">
                    <Link
                        to="/"
                        className="text-black text-2xl flex items-center no-underline"
                    >
                        {''}
                        <i className="fas fa-home text-xs sm:text-4xl md:text-8xl lg:text-8xl ml-2 text-black" />
                    </Link>
                </div>
                <div
                    className="ml-auto text-[1.8rem] text-white cursor-pointer lg:hidden"
                    onClick={handleClick}
                >
                    <i className={click ? 'fas fa-circle text-black' : 'fas fa-circle text-black'} />

                </div>
                <ul
                    className={`lg:flex lg:items-center lg:gap-8 ${
                        click
                            ? 'flex flex-col absolute top-20 left-0 w-full bg-transparent text-center'
                            : 'hidden'
                    }`}
                >
                    <li className="h-12 lg:h-auto">
                        <Link
                            to="/"
                            className="text-black font-bold no-underline px-4 py-2 block lg:inline-block hover:border-b-2 hover:border-black"
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="h-12 lg:h-auto">
                        <Link
                            to="/blackjack"
                            className="text-black font-bold no-underline px-4 py-2 block lg:inline-block hover:border-b-2 hover:border-black"
                            onClick={closeMobileMenu}
                        >
                            Blackjack
                        </Link>
                    </li>
                    <li className="h-12 lg:h-auto">
                        <Link
                            to="/resume"
                            className="text-black font-bold no-underline px-4 py-2 block lg:inline-block hover:border-b-2 hover:border-black"
                            onClick={closeMobileMenu}
                        >
                            Resume
                        </Link>
                    </li>
                </ul>
                <Footer />
            </nav>
        </>
    );
};

export default Navbar;
