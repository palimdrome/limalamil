// --- ADDED: Import useState and useEffect ---
import React, { useState, useEffect } from 'react';
import Button from "./Button";
import Socials from "./Socials";
import CodeIllustration from "./CodeIllustration";

function Homepage({ isLoading }) {

  // --- ADDED: State logic for animation ---
  const [isVisible, setIsVisible] = useState(false); // Start hidden
  const FADE_IN_DELAY_MS = 200; // Small delay after loading finishes

  useEffect(() => {
    let timer;
      // --- FIX 2: Only start the fade-in *after* isLoading becomes false ---
      if (!isLoading) {
          // Use setTimeout to add a slight delay
          timer = setTimeout(() => {
              setIsVisible(true); // Trigger the fade-in animation
          }, FADE_IN_DELAY_MS);
      }

      // Cleanup the timer
      return () => clearTimeout(timer);
  }, [isLoading]); // Empty array ensures this runs only once

  // --- ADDED: Define animation class states ---
  const hiddenState = 'opacity-0 translate-y-8';
  const visibleState = 'opacity-100 translate-y-0';
  // --- END ADDED ---

  return (
    <div
      id="home"
      className="card card-homepage hero min-h-screen flex flex-row justify-around bg-contain bg-right-bottom bg-no-repeat pt-2 lg:pt-8 md:pt-16 relative overflow-hidden"
    >
      {/* --- MODIFIED: Added animation classes to this div --- */}
      <div className={`
          card-content hero-content flex flex-col justify-start lg:flex-row w-5/6 relative z-20
          
          guaranteed-transition  /* Add the class from App.css */
          
          ${isVisible ? visibleState : hiddenState} /* Apply dynamic classes */
      `}>
        {/* --- END MODIFIED --- */}

        <div className="flex flex-col gap-y-1 lg:gap-y-3 md:gap-y-1 lg:w-3/4">
          <p className="text-sm pl-1 text-base-content font-extralight">Hi, my name is</p>
          <h1 className="text-[3.5rem] lg:text-7xl md:text-6xl leading-none font-bold text-base-content">Limuelle Alamil.</h1>
          <h2 className="text-[2rem] lg:text-5xl md:text-4xl font-bold text-primary leading-none">An aspiring software solutions builder</h2>
          <p className="w-full lg:w-3/4 md:w-3/4 text-sm lg:text-base md:text-base font-extralight pt-2 pb-6 font-firacode">A creative and detail-oriented professional, eager to contribute my skills to a supportive team while continuously pursuing growth and development.</p>

          <div className="flex flex-col md:flex-row lg:flex-row justify-start md:items-center lg:items-center gap-x-10 gap-y-4 w-full ">
            <div className="w-3/4 md:w-auto lg:w-auto">
              <Button url="https://drive.google.com/file/d/10xFFplxquS1-AoszcMVFbyL9Xwr6zMSA/view?usp=sharing" target="_blank" action="Download my CV"></Button>
            </div>

            <nav className="w-2/7">
              <Socials></Socials>
            </nav>
          </div>
        </div>

        <div className="
                hidden lg:block lg:w-1/4
                relative
                -ml-40 lg:-ml-0
                mt-12 lg:mt-0
            ">
          <CodeIllustration />
        </div>

      </div>

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
        <div className="line line-4"></div>
        <div className="line line-5"></div>
      </div>
      {/* ---------------------------------- */}

    </div>
  )
}
export default Homepage;