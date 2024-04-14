import React from "react"
import Button from "./Button";

function Homepage() {
  return (
    <div class="hero min-h-screen flex flex-row justify-around bg-base-100 bg-[url('./assets/hero.png')] bg-contain bg-right-bottom bg-no-repeat pt-8">
        <div class="hero-content flex flex-col justify-start lg:flex-row w-5/6">
            {/* <img src="src\assets\hero.png" class="max-w-sm object-right-bottom" /> */}
            <div class="w-3/4">
              <p class="text-lg font-extralight">Hi, my name is</p>
              <h1 class="text-7xl font-bold">Limuelle Alamil.</h1>
              <h2 class="text-6xl font-bold text-accent">An aspiring frontend web developer.</h2>
              <p class="w-2/3 text-lg font-extralight py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
              <Button action="See my works!"></Button>
            </div>
        </div>
    </div>
  )
}
export default Homepage;