import React from "react"
import Button from "./Button";

function Homepage() {
  
  // const bg = '/assets/hero.png'

  return (
    <div id="home" class="hero min-h-screen flex flex-row justify-around bg-base-100 lg:bg-[url('/assets/hero.webp')] bg-contain bg-right-bottom bg-no-repeat pt-2 lg:pt-8 md:pt-16">
        <div class="hero-content flex flex-col justify-start lg:flex-row w-5/6">
            <div class="flex flex-col gap-y-1 lg:gap-y-3 md:gap-y-1 lg:w-3/4">
              <p class="text-sm lg:text-base md:text-base font-extralight font-firacode pb-6">Hi, my name is</p>
              <h1 class="text-[3.5rem] lg:text-7xl md:text-6xl leading-none font-bold">Limuelle Alamil.</h1>
              <h2 class="text-[2rem] lg:text-6xl md:text-5xl leading-9 font-bold text-accent">An aspiring frontend web developer.</h2>
              <p class="w-full lg:w-3/4 md:w-3/4 text-sm lg:text-base md:text-base font-extralight py-6 font-firacode">I am enthusiastic about sharing my skills to a supportive team and being open to professional growth.</p>
              <div><Button url="#projects" action="See my works!"></Button></div>
            </div>
        </div>
    </div>
  )
}
export default Homepage;