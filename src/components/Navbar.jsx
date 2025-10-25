import { useState, useEffect } from 'react';
import Button from "./Button";
 
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
        <div className={`drawer drawer-end`}>
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className={`drawer-content w-full flex flex-row justify-center backdrop-filter backdrop-blur-3xl fixed z-[98] transition-transform duration-300 transform ${show ? 'translate-y-0' : '-translate-y-full'}`}>
                {/* Page content here */}
                <div className={`navbar w-5/6 py-4`}>
                     <div className="mx-2 flex-1 px-2">
                         <a href="#home" className="text-base lg:text-lg md:text-lg">
                             <span>lim
                             <span class="text-primary">.</span>
                             ala
                             <span class="text-primary">.</span>
                             mil</span>
                         </a>
                     </div>
                     <div className="flex-none lg:hidden">
                         <label htmlFor="my-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
                         <svg
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             className="inline-block h-6 w-6 stroke-current"
                         >
                             <path
                             strokeLinecap="round"
                             strokeLinejoin="round"
                             strokeWidth="2"
                             d="M4 6h16M4 12h16M4 18h16"
                             ></path>
                         </svg>
                         </label>
                     </div>
                     <div className="hidden flex-none lg:block">
                         <ul className="menu menu-horizontal">
                             <li><a href="#about"><span class="text-sm"><span class="text-primary text-xs">01.</span> About</span></a></li>
                             <li><a href="#experience"><span class="text-sm"><span class="text-primary text-xs">02.</span> Experience</span></a></li>
                             <li><a href="#projects"><span class="text-sm"><span class="text-primary text-xs">03.</span> Projects</span></a></li>
                             <li><a href="#contact"><span class="text-sm"><span class="text-primary text-xs">04.</span> Contact</span></a></li>
                         </ul>
                     </div>
                 </div>
            </div>
            <div className="drawer-side z-[99]">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu flex flex-col justify-center items-center gap-y-5 bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li className="mb-8">
                        <a href="#home" className="text-base lg:text-lg md:text-lg">
                             <span>lim
                             <span class="text-primary">.</span>
                             ala
                             <span class="text-primary">.</span>
                             mil</span>
                         </a>
                    </li>
                    <li>
                        <a href="#about" className="flex flex-col justify-center items-center">
                            <span class="text-primary text-xs">01.</span>
                            <span class="text-base">About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className="flex flex-col justify-center items-center">
                            <span class="text-primary text-xs">02.</span>
                            <span class="text-base">Experience</span>
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="flex flex-col justify-center items-center">
                            <span class="text-primary text-xs">03.</span>
                            <span class="text-base">Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="flex flex-col justify-center items-center">
                            <span class="text-primary text-xs">04.</span>
                            <span class="text-base">Contact</span>
                        </a>
                    </li>

                    <li className="mt-8">
                        <Button url="https://drive.google.com/file/d/10xFFplxquS1-AoszcMVFbyL9Xwr6zMSA/view?usp=sharing" target="_blank" action="Download my CV"></Button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;