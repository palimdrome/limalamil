import React, {useState} from 'react';
import Heading from './Heading';
import Icons from './Icons';
import IconsSmall from './IconsSmall';

function AboutCard(props) {
    var bg = props.bg;
    var type = props.type;
    var title = props.title;
    var inst = props.inst;
    var year = props.year

    return (
        <div class={`relative flex flex-col justify-between gap-y-1 lg:gap-y-2 md:w-[47.5%] lg:w-5/12 bg-base-100 rounded-xl py-8 px-7 z-[0] group`}>

            <div class="absolute bg-cover bg-left-top bg-no-repeat w-full h-full top-0 left-0 rounded-xl opacity-40 grayscale group-hover:grayscale-0 z-[-10] ease-in-out delay-50 duration-300" style={{backgroundImage: `url(${bg})`}}></div>
            
            <p class="text-sm lg:text-lg font-light font-firacode">{type}</p>
            <h2 class="text-xl lg:text-2xl font-bold pt-9">{title}</h2>
            <p class="text-sm lg:text-lg font-light font-firacode">{inst}</p>
            <p class="text-sm lg:text-lg font-light font-firacode">{year}</p>
            
        </div>
    )
}

function About() {
    return ( 
        <div class="flex flex-row justify-around bg-base-100 py-20" id="about">
            <div class="flex flex-col justify-around items-center gap-y-14 md:gap-y-16 lg:gap-y-20 w-5/6">
                <Heading number="01." title="Can I do the job?"></Heading>

                <div class="flex flex-col gap-y-6 md:flex-row lg:flex-row justify-around self-stretch flex-wrap">

                    <AboutCard
                        bg='./assets/upv-mia.webp'
                        bg_hover='./assets/upv-mia-hover.webp'
                        type='Education'
                        title='B.S. in Computer Science'
                        inst='University of the Philippines Visayas'
                        year='2019 - 2023'>
                    </AboutCard>

                    <AboutCard
                        bg='./assets/remote-work.webp'
                        bg_hover='./assets/remote-work-hover.webp'
                        type='Experience'
                        title='Fullstack Development Intern'
                        inst='DevKinetics Inc., Manila, Philippines'
                        year='2022'>
                    </AboutCard>

                </div>

                <Icons></Icons>
                <IconsSmall></IconsSmall>
            </div>
        </div>
    );
}

export default About;