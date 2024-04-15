import React from 'react';

function Footer() {
    return ( 
        <footer class="footer footer-center flex flex-col gap-y-5 pt-0 pb-10 bg-base-100 text-base-content rounded">
            <nav>
                <div class="grid grid-flow-col gap-8">
                    <a><i class="devicon-linkedin-plain text-3xl"></i></a>
                    <a><i class="devicon-facebook-plain text-3xl"></i></a>
                    <a><i class="devicon-github-original text-3xl"></i></a>
                </div>
            </nav> 
            <aside>
                <p class="font-light">Designed and built by <span class="font-bold text-primary">Limuelle Alamil</span>.</p>
                <a href="https://v4.brittanychiang.com/" class="text-xs font-extralight">See this project's design inspo.</a>
            </aside>
        </footer>
     );
}

export default Footer;