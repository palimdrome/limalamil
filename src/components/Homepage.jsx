import Button from "./Button";
import Socials from "./Socials";
import CodeIllustration from "./CodeIllustration";

function Homepage() {
  return (
    // OUTSIDE DIV: This is the 'card' container, spanning the full screen.
    // The animation will cover the entire area of this element.
    <div 
      id="home" 
      className="card card-homepage hero min-h-screen flex flex-row justify-around bg-contain bg-right-bottom bg-no-repeat pt-2 lg:pt-8 md:pt-16 relative overflow-hidden" 
    >
        
        {/* All content wrapped in 'card-content' to float above the animation layers. */}
        <div className="card-content hero-content flex flex-col justify-start lg:flex-row w-5/6 relative z-20"> 
            
            {/* 1. Main Text Content (Left/Top) */}
            <div className="flex flex-col gap-y-1 lg:gap-y-3 md:gap-y-1 lg:w-3/4">
                <p className="text-sm pl-1 text-base-content font-extralight">Hi, my name is</p>
                <h1 className="text-[3.5rem] lg:text-7xl md:text-6xl leading-none font-bold text-base-content">Limuelle Alamil.</h1>
                <h2 className="text-[2rem] lg:text-5xl md:text-4xl font-bold text-primary leading-none">An aspiring software solutions builder</h2>
                <p className="w-full lg:w-3/4 md:w-3/4 text-sm lg:text-base md:text-base font-extralight pt-2 pb-6 font-firacode">A creative and detail-oriented professional, eager to contribute my skills to a supportive team while continuously pursuing growth and development.</p>
                
                <div className="flex flex-col md:flex-row lg:flex-row justify-start md:items-center lg:items-center gap-x-10 gap-y-4 w-full ">
                    <div className="w-3/4 md:w-auto lg:w-auto">
                        <Button url="https://drive.google.com/file/d/10xFFplxquS1-AoszcMVFbyL9Xwr6zMSA/view?usp=sharing" target="_blank" action="Download my CV"></Button>
                    </div>
                    
                    <nav className="w-1/5">
                        <Socials></Socials>
                    </nav>
                </div>
            </div>

            {/* 2. Code Illustration (Right/Bottom) */}
            <div className="
                hidden lg:block lg:w-1/4 
                relative
                -ml-40 lg:-ml-0
                mt-12 lg:mt-0 
            ">
                <CodeIllustration />
            </div>
            
        </div>
        
        {/* --- TILE ANIMATION HTML ELEMENTS --- 
            These must be direct children of the 'card' container.
        */}
        <div className="shine"></div>
        <div className="background">
            <div className="tiles">
                <div className="tile tile-1"></div>
                <div className="tile tile-2"></div>
                <div className="tile tile-3"></div>
                <div className="tile tile-4"></div>
                <div className="tile tile-5"></div>
                <div className="tile tile-6"></div>
                <div className="tile tile-7"></div>
                <div className="tile tile-8"></div>
                <div className="tile tile-9"></div>
                <div className="tile tile-10"></div>
                <div className="tile tile-11"></div>
                <div className="tile tile-12"></div>
                <div className="tile tile-13"></div>
                <div className="tile tile-14"></div>
                <div className="tile tile-15"></div>
                <div className="tile tile-16"></div>
                <div className="tile tile-17"></div>
                <div className="tile tile-18"></div>
                <div className="tile tile-19"></div>
                <div className="tile tile-20"></div>
                <div className="tile tile-21"></div>
                <div className="tile tile-22"></div>
                <div className="tile tile-23"></div>
                <div className="tile tile-24"></div>
            </div>
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
        </div>
        {/* ---------------------------------- */}

    </div>
  )
}
export default Homepage;