import React from "react"
import Button from "./Button";

function Homepage() {
  return (
    <div class="hero min-h-screen flex flex-row justify-around bg-base-100 bg-[url('./assets/hero.png')] bg-contain bg-right-bottom bg-no-repeat pt-8">
        <div class="hero-content flex flex-col justify-start lg:flex-row w-5/6">
            {/* <img src="src\assets\hero.png" class="max-w-sm object-right-bottom" /> */}
            <div class="flex flex-col gap-y-3 w-3/4">
              <p class="text-base font-extralight font-firacode">Hi, my name is</p>
              <h1 class="text-7xl font-bold">Limuelle Alamil.</h1>
              <h2 class="text-6xl font-bold text-accent">An aspiring frontend web developer.</h2>
              <p class="w-3/4 text-base font-extralight py-6 font-firacode">As a recent graduate, I am enthusiastic about contributing my skills and knowledge to a supportive team, while welcoming guidance and opportunities for professional growth.</p>
              <div><Button url="#projects" action="See my works!"></Button></div>
            </div>
        </div>
    </div>
  )
}
export default Homepage;