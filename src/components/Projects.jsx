import React from 'react';
import Heading from './Heading';

function Projects() {
    return ( 
        <div class="flex flex-row justify-around bg-base-100 py-20">
            <div class="flex flex-col justify-around items-center gap-y-20 w-5/6">
                <Heading number="02." title="Some of my works"></Heading>

                {/* Frontend Projects */}
                <div class="flex flex-col gap-y-10 w-full">
                    <h2 class="text-2xl font-bold text-center">Frontend</h2>
                    <div class="flex flex-row flex-wrap justify-between self-stretch">

                        <div class="flex flex-col justify-around gap-y-2 w-trio bg-[url('./assets/windborne.png')] hover:bg-[url('./assets/windborne-hover.png')] bg-cover bg-left-top bg-no-repeat ease-in-out delay-50 duration-300 rounded-xl py-5 px-7">
                            <div class="flex flex-row justify-between items-center">
                                <p class="text-sm font-light font-firacode">Website</p>
                                <div class="flex flex-row gap-x-2">
                                    <i class="fa fa-external-link-square text-2xl"></i>
                                    <i class="devicon-github-plain text-2xl"></i>
                                </div>
                            </div>
                            <h2 class="text-xl font-bold pt-9">Windborne Gaming</h2>
                            <p class="text-sm font-light font-firacode">A website designed for an account boosting service provider for HoYoverse games.</p>
                            <div class="flex flex-row gap-x-3 text-lg">
                                <i class="devicon-react-original"></i>
                                <i class="devicon-vitejs-plain"></i>
                                <i class="devicon-tailwindcss-original"></i>
                            </div>
                        </div>

                        <div class="flex flex-col justify-around gap-y-2 w-trio bg-[url('./assets/limicons.png')] hover:bg-[url('./assets/limicons-hover.png')] bg-cover bg-left-top bg-no-repeat ease-in-out delay-50 duration-300 rounded-xl py-5 px-7">
                            <div class="flex flex-row justify-between items-center">
                                <p class="text-sm font-light font-firacode">Landing Page</p>
                                <div class="flex flex-row gap-x-2">
                                    <i class="fa fa-external-link-square text-2xl"></i>
                                    <i class="devicon-github-plain text-2xl"></i>
                                </div>
                            </div>
                            <h2 class="text-xl font-bold pt-9">Limicons</h2>
                            <p class="text-sm font-light font-firacode">A landing page designed for a icon designer's portfolio of flat icon projects.</p>
                            <div class="flex flex-row gap-x-3 text-lg">
                                <i class="devicon-html5-plain"></i>
                                <i class="devicon-css3-plain"></i>
                                <i class="devicon-javascript-plain"></i>
                            </div>
                        </div>

                        <div class="flex flex-col justify-around gap-y-2 w-trio bg-[url('./assets/sersi.png')] hover:bg-[url('./assets/sersi-hover.png')] bg-cover bg-left-top bg-no-repeat ease-in-out delay-50 duration-300 rounded-xl py-5 px-7">
                            <div class="flex flex-row justify-between items-center">
                                <p class="text-sm font-light font-firacode">Landing Page</p>
                                <div class="flex flex-row gap-x-2">
                                    <i class="fa fa-external-link-square text-2xl"></i>
                                    <i class="devicon-github-plain text-2xl"></i>
                                </div>
                            </div>
                            <h2 class="text-xl font-bold pt-9">Sersi</h2>
                            <p class="text-sm font-light font-firacode">A landing page designed for a fictional landscaping business, Sersi.</p>
                            <div class="flex flex-row gap-x-3 text-lg">
                                <i class="devicon-html5-plain"></i>
                                <i class="devicon-css3-plain"></i>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Backend Projects */}
                <div class="flex flex-col gap-y-10 w-full">
                    <h2 class="text-2xl font-bold text-center">Backend</h2>
                    <div class="flex flex-row justify-around gap-x-5">

                        <div class="relative flex flex-col justify-around gap-y-2 w-trio bg-[url('./assets/cora.png')] hover:bg-[url('./assets/cora-hover.png')] bg-cover bg-left-top bg-no-repeat ease-in-out delay-50 duration-300 rounded-xl py-5 px-7">
                            <div class="flex flex-row justify-between items-center">
                                <p class="text-sm font-light font-firacode">Web App</p>
                                <div class="flex flex-row gap-x-2">
                                    <i class="fa fa-external-link-square text-2xl"></i>
                                    <i class="devicon-github-plain text-2xl"></i>
                                </div>
                            </div>
                            <h2 class="text-xl font-bold pt-9">CORA</h2>
                            <p class="text-sm font-light font-firacode">CORA or Computerized Oral Reading Assessment is a web app designed to assess the reading proficiency of elementary students.</p>
                            <div class="flex flex-row gap-x-3 text-lg">
                                <i class="devicon-nextjs-plain"></i>
                                <i class="devicon-tailwindcss-original"></i>
                                <i class="devicon-firebase-plain"></i>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Other Projects */}
                <div class="flex flex-col gap-y-10 w-10/12">
                    <h2 class="text-xl font-bold text-center">Other Noteworthy Projects</h2>
                    <div class="flex flex-row justify-around gap-x-5">

                        <div class="relative flex flex-col justify-around gap-y-2 w-1/3 bg-[#292929] hover:bg-[#1A1A1A] bg-cover bg-left-top bg-no-repeat ease-in-out delay-50 duration-300 rounded-xl py-5 px-6">
                            <div class="flex flex-row justify-between">
                                <p class="text-xs font-light font-firacode">Machine Learning</p>
                                <div class="flex flex-row gap-x-2">
                                    <i class="fa fa-external-link-square"></i>
                                    <i class="devicon-github-plain"></i>
                                </div>
                            </div>
                            <h2 class="text-lg font-bold pt-9">Waste Classifier</h2>
                            <p class="text-xs font-light font-firacode">An ML model that classifies waste (bio/non-bio) based on images using Support Vector Machine and computer vision techniques.</p>
                            <div class="flex flex-row gap-x-3 text-base">
                                <i class="devicon-python-plain"></i>
                                <i class="devicon-jupyter-plain-wordmark"></i>
                            </div>
                        </div>

                        <div class="relative flex flex-col justify-around gap-y-2 w-1/3 bg-[#292929] hover:bg-[#1A1A1A] bg-cover bg-left-top bg-no-repeat ease-in-out delay-50 duration-300 rounded-xl py-5 px-6">
                            <div class="flex flex-row justify-between">
                                <p class="text-xs font-light font-firacode">Game</p>
                                <div class="flex flex-row gap-x-2">
                                    <i class="fa fa-external-link-square"></i>
                                    <i class="devicon-github-plain"></i>
                                </div>
                            </div>
                            <h2 class="text-lg font-bold pt-9">SincoNext</h2>
                            <p class="text-xs font-light font-firacode">A simple dodging game inspired by the University of the Philippine's grading system made using Pygame.</p>
                            <div class="flex flex-row gap-x-3 text-base">
                                <i class="devicon-python-plain"></i>
                            </div>
                        </div>

                        <div class="relative flex flex-col justify-around gap-y-2 w-1/3 bg-[#292929] hover:bg-[#1A1A1A] bg-cover bg-left-top bg-no-repeat ease-in-out delay-50 duration-300 rounded-xl py-5 px-6">
                            <div class="flex flex-row justify-between">
                                <p class="text-xs font-light font-firacode">Game</p>
                                <div class="flex flex-row gap-x-2">
                                    <i class="fa fa-external-link-square"></i>
                                    <i class="devicon-github-plain"></i>
                                </div>
                            </div>
                            <h2 class="text-lg font-bold pt-9">Spell Casting Game</h2>
                            <p class="text-xs font-light font-firacode">A simple turn-based game that runs in the terminal (no GUI) inspired by the Harry Potter series and Pokemon battles.</p>
                            <div class="flex flex-row gap-x-3 text-base">
                                <i class="devicon-java-plain"></i>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
     );
}

export default Projects;