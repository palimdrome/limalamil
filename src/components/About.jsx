import React from 'react';
import Heading from './Heading';
import Icons from './Icons';
import IconsSmall from './IconsSmall';

function About() {
    return ( 
        <div class="flex flex-row justify-around bg-base-100 py-28">
            <div class="flex flex-col justify-around items-center gap-y-20 w-5/6">
                <Heading number="01." title="Can I do the job?"></Heading>

                <div class="flex flex-row justify-around self-stretch">

                    <div class="relative flex flex-col justify-around gap-y-2 w-5/12 bg-[url('./assets/upv-mia-idle.svg')] hover:bg-[url('./assets/upv-mia-hover.svg')] bg-cover bg-left-top bg-no-repeat ease-in-out delay-50 duration-300 rounded-xl py-8 px-7">

                        <p class="text-lg font-light font-firacode">Education</p>
                        <h2 class="text-2xl font-bold pt-9">B.S. in Computer Science</h2>
                        <p class="text-lg font-light font-firacode">University of the Philippines Visayas</p>
                        <p class="text-lg font-light font-firacode">2019 - 2023</p>
                    </div>

                    <div class="relative flex flex-col justify-around gap-y-2 w-5/12 bg-[url('./assets/remote-work-idle.svg')] hover:bg-[url('./assets/remote-work-hover.svg')] bg-cover bg-left-top bg-no-repeat ease-in-out delay-50 duration-300 rounded-xl py-8 px-7">

                        <p class="text-lg font-light font-firacode">Experience</p>
                        <h2 class="text-2xl font-bold pt-9">Fullstack Dev Intern</h2>
                        <p class="text-lg font-light font-firacode">DevKinetics Inc., Manila, PH</p>
                        <p class="text-lg font-light font-firacode">2022</p>
                    </div>

                </div>

                <Icons></Icons>
                <IconsSmall></IconsSmall>
            </div>
        </div>
    );
}

export default About;