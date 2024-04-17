import React from 'react';
import { useState, useEffect } from 'react';

function Navbar() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    
    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
            // if scrolling down, hide the navbar
            setShow(false);
        } else {
            // if scrolling up, show the navbar
            setShow(true);
        }
    
        // remember the current page location for the next move
        setLastScrollY(window.scrollY);
        }
    };
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
    
        // cleanup function
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
        }
    }, [lastScrollY]);

    return (
        <div class={`navbar flex flex-row align-center backdrop-filter backdrop-blur-3xl fixed z-[99] py-2 lg:py-4 md:py-4 px-4 lg:px-8 md:px-4 transition-transform duration-300 transform ${show ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-6 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="#about"><span class="text-lg"><span class="text-primary font-firacode">01.</span> About</span></a></li>
                    <li><a href="#projects"><span class="text-lg"><span class="text-primary font-firacode">02.</span> Projects</span></a></li>
                    <li><a href="#contact"><span class="text-lg"><span class="text-primary font-firacode">03.</span> Contact</span></a></li>
                </ul>
                </div>
                <a href="#home" className="btn btn-ghost text-xl lg:text-2xl md:text-2xl">
                    <span>lim
                    <span class="text-primary">.</span>
                    ala
                    <span class="text-primary">.</span>
                    mil</span>
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#about" class="text-base"><span><span class="text-primary font-firacode">01.</span> About</span></a></li>
                    <li><a href="#projects" class="text-base"><span><span class="text-primary font-firacode">02.</span> Projects</span></a></li>
                    <li><a href="#contact" class="text-base"><span><span class="text-primary font-firacode">03.</span> Contact</span></a></li>
                </ul>
            </div>
            <div className="navbar-end">
            <a href="https://drive.google.com/file/d/1uej8K_88CGzk02bqtlEC9w1-A3TJkiII/view?usp=sharing" target="_blank">
                <button class="flex flex-row justify-center items-center gap-x-2 font-bold px-3 lg:px-5 md:px-5 py-2 text-sm lg:text-base md:text-base text-center text-base-100 bg-gradient-to-r from-secondary to-primary rounded-md border-2 lg:border-2 md:border-2 border-base-100 hover:border-primary hover:text-primary hover:from-transparent hover:to-transparent duration-500">
                    <i class="fa fa-download"></i>
                    Resume
                </button>
            </a>
            </div>
        </div>
    );
}

export default Navbar;