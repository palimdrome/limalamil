import React from 'react';
import Heading from './Heading';

function Projects() {

    // Add frontend projects here.
    var frontendProjectsArray = [
        {
            bg: './assets/windborne.webp',
            type: 'Website',
            link: 'https://palimdrome.github.io/windborne-gaming/',
            githubLink: 'https://github.com/palimdrome/windborne-gaming',
            title: 'Windborne Gaming',
            desc: 'A website designed for an account boosting service provider for HoYoverse games.',
            tools: [
                ['devicon-react-original', 'React'],
                ['devicon-vitejs-plain', 'Vite'],
                ['devicon-tailwindcss-original', 'Tailwind CSS'],
                ['devicon-figma-plain', 'Figma']
            ],
            devices: [
                ['fa fa-mobile-phone', 'Mobile'], 
                ['fa fa-tablet', 'Tablet'],
                ['fa fa-desktop', 'Desktop']
            ]
        },
        {
            bg: './assets/limicons.webp',
            type: 'Landing Page',
            link: 'https://palimdrome.github.io/limicons/',
            githubLink: 'https://github.com/palimdrome/limicons',
            title: 'Limicons',
            desc: 'A landing page designed for a icon designer\'s portfolio of flat icon projects.',
            tools: [
                ['devicon-html5-plain', 'HTML'],
                ['devicon-css3-plain', 'CSS'],
                ['devicon-javascript-plain', 'JavaScript'],
                ['devicon-figma-plain', 'Figma']
            ],
            devices: [
                ['fa fa-mobile-phone', 'Mobile'], 
                ['fa fa-tablet', 'Tablet'],
                ['fa fa-desktop', 'Desktop']
            ]
        },
        {
            bg: './assets/sersi.webp',
            type: 'Landing Page',
            link: 'https://palimdrome.github.io/sersi-landing-page/',
            githubLink: 'https://github.com/palimdrome/sersi-landing-page',
            title: 'Sersi',
            desc: 'A landing page designed for a fictional landscaping business, Sersi.',
            tools: [
                ['devicon-html5-plain', 'HTML'],
                ['devicon-css3-plain', 'CSS'],
                ['devicon-figma-plain', 'Figma']
            ],
            devices: [
                ['fa fa-mobile-phone', 'Mobile'], 
                ['fa fa-tablet', 'Tablet'],
                ['fa fa-desktop', 'Desktop']
            ]
        }
    ]

    // Add backend projects here.
    var backendProjectsArray = [
        {
            bg: './assets/cora.webp',
            type: 'Web App',
            link: '',
            githubLink: 'https://github.com/CORA-Initiative/cora',
            title: 'CORA',
            desc: 'CORA or Computerized Oral Reading Assessment is a web app designed to assess the reading proficiency of elementary students.',
            tools: [
                ['devicon-nextjs-plain', 'Next.js'],
                ['devicon-tailwindcss-original', 'Tailwind CSS'],
                ['devicon-firebase-plain', 'Firebase']
            ],
            devices: [
                ['fa fa-mobile-phone', 'Mobile'], 
                ['fa fa-tablet', 'Tablet'],
                ['fa fa-desktop', 'Desktop']
            ]
        }
    ]

    // Add other noteworthy projects here.
    var otherProjectsArray = [
        {
            type: 'Machine Learning',
            link: '',
            githubLink: 'https://github.com/palimdrome/waste-classifier',
            title: 'Waste Classifier',
            desc: 'An ML model that classifies waste (bio/non-bio) based on images using Support Vector Machine and computer vision techniques.',
            tools: [
                ['devicon-python-plain', 'Python'],
                ['devicon-jupyter-plain-wordmark', 'Jupyter Notebook']
            ]
        },
        {
            type: 'Game',
            link: '',
            githubLink: 'https://github.com/Eugocode/SINCONext/blob/main/README.md',
            title: 'SincoNext',
            desc: 'A simple dodging game inspired by the University of the Philippine\'s grading system made using Pygame.',
            tools: [
                ['devicon-python-plain', 'Python']
            ]
        },
        {
            type: 'Game',
            link: '',
            githubLink: 'https://github.com/palimdrome/java-spell-casting-console-game',
            title: 'Spell Casting Game',
            desc: 'A simple turn-based game that runs in the terminal (no GUI) inspired by the Harry Potter series and Pokemon battles.',
            tools: [
                ['devicon-java-plain', 'Java']
            ]
        }
    ]

    // Function to show frontend and backend projects.
    function showProjects(project) {
        return (
            <div class="relative flex flex-col justify-between flex-wrap gap-y-2 md:w-[47.5%] lg:w-[32%] bg-cover bg-left-top bg-no-repeat ease-in-out delay-50 duration-300 rounded-xl py-5 px-7 z-[0] group">

                <div class="absolute bg-cover bg-left-top bg-no-repeat w-full h-full top-0 left-0 rounded-xl opacity-40 grayscale group-hover:grayscale-0 z-[-10] ease-in-out delay-50 duration-300" style={{backgroundImage: `url(${project.bg})`}}></div>

                <div class="flex flex-row justify-between items-center">
                    <p class="text-sm font-light font-firacode">{project.type}</p>
                    <div class="flex flex-row gap-x-2">
                        {project.link === '' ? <div class='hidden'></div> : <a href={`${project.link}`} class="hover:-translate-x-0.5 hover:scale-125 ease-in-out duration-300" target="_blank"><div class="tooltip tooltip-bottom" data-tip="Go to site"><i class="fa fa-external-link-square text-2xl hover:text-primary ease-in-out duration-300"></i></div></a>}
                        {project.githubLink === '' ? <div class='hidden'></div> : <a href={`${project.githubLink}`} class="hover:-translate-x-0.5 hover:scale-125 ease-in-out duration-300" target="_blank"><div class="tooltip tooltip-bottom" data-tip="Go to GitHub repo"><i class="devicon-github-plain text-2xl hover:text-primary ease-in-out duration-300"></i></div></a>}
                    </div>
                </div>
                <h2 class="text-xl font-bold pt-9">{project.title}</h2>
                <p class="text-sm font-light font-firacode drop-shadow-md">{project.desc}</p>
                <div class="flex flex-row justify-between">
                    <div class="flex flex-row gap-x-3 text-lg">
                        {project.tools.map((tool) => (
                            <div class="tooltip tooltip-bottom" data-tip={`${tool[1]}`}>
                                <i class={`${tool[0]}`}></i>
                            </div>
                        ))}
                    </div>
                    <div class="flex flex-row gap-x-3 text-xl">
                        {project.devices.map((device) => (
                            <div class="tooltip tooltip-bottom" data-tip={`${device[1]}`}>
                                <i class={`${device[0]}`}></i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    function showOtherProjects(project) {
        return (
            <div class="relative flex flex-col justify-around gap-y-2 md:w-[45%] lg:w-[30%] bg-[#292929] hover:bg-[#1A1A1A] bg-cover bg-left-top bg-no-repeat ease-in-out delay-50 duration-300 rounded-xl py-5 px-6">
                <div class="flex flex-row justify-between">
                    <p class="text-xs font-light font-firacode">{project.type}</p>
                    <div class="flex flex-row gap-x-2 text-lg">
                        {project.link === '' ? <div class='hidden'></div> : <a href={`${project.link}`} class="hover:-translate-x-0.5 hover:scale-125 ease-in-out duration-300" target="_blank"><div class="tooltip tooltip-bottom" data-tip="Go to site"><i class="fa fa-external-link-square hover:text-primary ease-in-out duration-300 z-[99]"></i></div></a>}
                        {project.githubLink === '' ? <div class='hidden'></div> : <a href={`${project.githubLink}`} class="hover:-translate-x-0.5 hover:scale-125 ease-in-out duration-300" target="_blank"><div class="tooltip tooltip-bottom" data-tip="GitHub repo"><i class="devicon-github-plain hover:text-primary ease-in-out duration-300 z-[99]"></i></div></a>}
                    </div>
                </div>
                <h2 class="text-lg font-bold pt-9">{project.title}</h2>
                <p class="text-xs font-light font-firacode">{project.desc}</p>
                <div class="flex flex-row gap-x-3 text-lg">
                    {project.tools.map((tool) => (
                        <div class="tooltip tooltip-bottom z-99" data-tip={`${tool[1]}`}>
                            <i class={`${tool[0]}`}></i>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    const frontendProjects = frontendProjectsArray.map((project) => (
        showProjects(project)
    ))

    const backendProjects = backendProjectsArray.map((project) => (
        showProjects(project)
    ))

    const otherProjects = otherProjectsArray.map((project) => (
        showOtherProjects(project)
    ))

    return ( 
        <div class="flex flex-row justify-around bg-base-100 py-20" id="projects">
            <div class="flex flex-col justify-around items-center gap-y-16 w-5/6">
                <Heading number="02." title="Some of my works"></Heading>

                {/* Frontend Projects */}
                <div class="flex flex-col w-full gap-10">
                    <h2 class="text-2xl font-bold">Frontend</h2>
                    <div class="flex flex-col md:flex-row lg:flex-row flex-wrap self-stretch gap-5">

                        {frontendProjects}

                    </div>
                </div>

                {/* Backend Projects */}
                <div class="flex flex-col w-full gap-10">
                    <h2 class="text-2xl font-bold">Backend</h2>
                    <div class="flex flex-col md:flex-row lg:flex-row flex-wrap self-stretch gap-5">

                        {backendProjects}

                    </div>
                </div>

                {/* Other Projects */}
                <div class="flex flex-col w-10/12 lg:w-10/12 md:w-11/12 gap-10">
                    <h2 class="text-xl font-bold">Other Noteworthy Projects</h2>
                    <div class="flex flex-col md:flex-row lg:flex-row flex-wrap self-stretch gap-5">

                        {otherProjects}

                    </div>
                </div>

            </div>
        </div>
     );
}

export default Projects;