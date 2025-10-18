import Socials from "./Socials"

function Footer() {
    return ( 
        <footer class="footer footer-center flex flex-col gap-y-5 pt-0 pb-10 text-base-content rounded">
            <nav className="w-1/7">
                <Socials></Socials>
            </nav> 
            <aside>
                <p class="text-xs md:text-sm lg:text-sm font-light font-firacode">Designed and built by <span class="font-bold text-primary">Limuelle Alamil</span>.</p>
                <a href="https://v4.brittanychiang.com/" target="_blank" class="text-[0.7rem] underline font-extralight font-firacode">See this project's design inspo.</a>
            </aside>
        </footer>
     );
}

export default Footer;