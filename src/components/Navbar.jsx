import React from 'react';
import ButtonSmall from './ButtonSmall';

function Navbar() {
    return (
        <div class="navbar flex flex-row align-center bg-base-100 bg-opacity-95 fixed z-[99] py-4 px-8">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a><span><span class="text-primary font-firacode">01.</span> About</span></a></li>
                    <li><a><span><span class="text-primary font-firacode">02.</span> Projects</span></a></li>
                    <li><a><span><span class="text-primary font-firacode">03.</span> Contact</span></a></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-2xl">
                    <span>lim
                    <span class="text-primary">.</span>
                    ala
                    <span class="text-primary">.</span>
                    mil</span>
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a class="text-base"><span><span class="text-primary font-firacode">01.</span> About</span></a></li>
                    <li><a class="text-base"><span><span class="text-primary font-firacode">02.</span> Projects</span></a></li>
                    <li><a class="text-base"><span><span class="text-primary font-firacode">03.</span> Contact</span></a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <ButtonSmall action="Resume"></ButtonSmall>
            </div>
        </div>
    );
}

export default Navbar;