import React from 'react';

function Footer() {
    return ( 
        <footer class="footer footer-center flex flex-col gap-y-5 pt-0 pb-10 bg-base-100 text-base-content rounded">
            <nav>
                <div class="grid grid-flow-col gap-8">
                    <a href="https://www.linkedin.com/in/limuelle-alamil/" target="_blank"><i class="devicon-linkedin-plain text-2xl lg:text-3xl hover:text-primary ease-in-out duration-300"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100070561390068" target="_blank"><i class="devicon-facebook-plain text-2xl lg:text-3xl hover:text-primary ease-in-out duration-300"></i></a>
                    <a href="https://github.com/palimdrome" target="_blank"><i class="devicon-github-original text-2xl lg:text-3xl hover:text-primary ease-in-out duration-300"></i></a>
                </div>
            </nav> 
            <aside>
                <p class="text-xs md:text-sm lg:text-sm font-light font-firacode">Designed and built by <span class="font-bold text-primary">Limuelle Alamil</span>.</p>
                <a href="https://v4.brittanychiang.com/" target="_blank" class="text-[0.7rem] underline font-extralight font-firacode">See this project's design inspo.</a>
            </aside>
        </footer>
     );
}

export default Footer;