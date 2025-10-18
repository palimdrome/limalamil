import Button from "./Button";
import Socials from "./Socials";

function Homepage() {
  return (
    <div id="home" class="hero min-h-screen flex flex-row justify-around bg-contain bg-right-bottom bg-no-repeat pt-2 lg:pt-8 md:pt-16">
        <div class="hero-content flex flex-col justify-start lg:flex-row w-5/6">
            <div class="flex flex-col gap-y-1 lg:gap-y-3 md:gap-y-1 lg:w-3/4">
              <p class="text-sm pl-1 text-base-content font-extralight">Hi, my name is</p>
              <h1 class="text-[3.5rem] lg:text-7xl md:text-6xl leading-none font-bold text-base-content">Limuelle Alamil.</h1>
              <h2 class="text-[2rem] lg:text-5xl md:text-4xl font-bold text-primary leading-none">An aspiring frontend web developer.</h2>
              <p class="w-full lg:w-3/4 md:w-3/4 text-sm lg:text-base md:text-base font-extralight pt-2 pb-6 font-firacode">I am enthusiastic about sharing my skills to a supportive team and being open to professional growth.</p>
              
              <div className="flex flex-col md:flex-row lg:flex-row justify-start md:items-center lg:items-center gap-x-10 gap-y-4 w-full ">
                <div>
                  <Button url="https://drive.google.com/file/d/10xFFplxquS1-AoszcMVFbyL9Xwr6zMSA/view?usp=sharing" target="_blank" action="Download my CV"></Button>
                </div>
                
                <nav className="w-1/5">
                  <Socials></Socials>
                </nav>
              </div>
            </div>
        </div>
    </div>
  )
}
export default Homepage;