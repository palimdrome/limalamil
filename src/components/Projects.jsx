import Heading from './Heading';

function Projects() {

    // Add frontend projects here.
    var frontendProjectsArray = [
        {
            bg: './assets/idali.webp',
            type: 'Web App',
            link: 'https://idali.vercel.app/',
            githubLink: 'https://github.com/palimdrome/idali',
            title: 'IDali',
            desc: 'A web app that instantly generates a print-ready PDF of ID photos.',
            tools: [
                ['devicon-react-original', 'React'],
                ['devicon-vitejs-plain', 'Vite'],
                ['devicon-tailwindcss-original', 'Tailwind CSS']
            ],
            devices: [
                ['fa fa-mobile-phone', 'Mobile'], 
                ['fa fa-tablet', 'Tablet'],
                ['fa fa-desktop', 'Desktop']
            ]
        },
        {
            bg: './assets/windborne.webp',
            type: 'Landing Page',
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
        },
        {
            bg: './assets/mobile-data-tracker.webp',
            type: 'Web App',
            link: 'https://test-8bddd.web.app/',
            githubLink: 'https://github.com/RobJinon/mobile-data-tracker',
            title: 'Mobile Data Tracker',
            desc: 'A simple and efficient web app built with React.js, Tailwind CSS, and Firebase to help you track and input your mobile data usage.',
            tools: [
                ['devicon-react-original', 'React.js'],
                ['devicon-vitejs-plain', 'Vite'],
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
            <div class="flex flex-col justify-between flex-wrap gap-y-2 md:w-[47.5%] lg:w-[32%] bg-base-200 ease-in-out delay-50 duration-300 rounded-sm border border-[var(--color-base-100)] py-5 px-7 z-[0] group">
                {/* <div class="relative w-full aspect-video overflow-hidden border border-base-100">
                    <img src={`${project.bg}`} class="w-full h-full object-cover filter grayscale"/>
                    <div class="absolute inset-0 bg-primary mix-blend-multiply"></div>
                </div> */}
                <div className="w-full aspect-video overflow-hidden">
                    <img className="object-cover opacity-60 w-full h-full" src={`${project.bg}`} alt="My profile picture" />
                </div>
                <h2 class="text-base font-bold mt-2">{project.title}</h2>
                <p class="text-sm font-light text-primary">{project.type}</p>
                <p class="text-sm font-light drop-shadow-md">{project.desc}</p>
                <div class="flex flex-row justify-between mt-6">
                    <div class="flex flex-row gap-x-3 text-lg">
                        {project.tools.map((tool) => (
                            <div class="tooltip tooltip-bottom" data-tip={`${tool[1]}`}>
                                <i class={`${tool[0]}`}></i>
                            </div>
                        ))}
                    </div>

                    <div class="flex flex-row justify-between items-center">
                        <div class="flex flex-row gap-x-2">

                        {project.link === '' ? <div class='hidden'></div> : <a href={`${project.link}`} class="ease-in-out duration-300" target="_blank"><div class="tooltip tooltip-bottom z-99" data-tip="Go to site"><i class="fa fa-external-link text-9xl hover:text-primary font-extralight ease-in-out duration-300"></i></div></a>}

                        {project.githubLink === '' ? <div class='hidden'></div> : <a href={`${project.githubLink}`} class="ease-in-out duration-300" target="_blank"><div class="tooltip tooltip-bottom z-99" data-tip="GitHub repo"><i class="devicon-github-plain text-base hover:text-primary ease-in-out duration-300"></i></div></a>}

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function showOtherProjects(project) {
        return (
            <div class="flex flex-col justify-around gap-y-2 md:w-[45%] lg:w-[30%] bg-base-300 hover:bg-base-200 ease-in-out delay-50 duration-300 rounded-sm border border-base-100 py-5 px-6">
                <h2 class="text-base font-bold pt-9">{project.title}</h2>
                <p class="text-xs font-light text-primary">{project.type}</p>
                <p class="text-xs font-light">{project.desc}</p>
                <div class="flex flex-row justify-between mt-6">
                    <div class="flex flex-row gap-x-3 text-lg">
                        {project.tools.map((tool) => (
                            <div class="tooltip tooltip-bottom" data-tip={`${tool[1]}`}>
                                <i class={`${tool[0]}`}></i>
                            </div>
                        ))}
                    </div>

                    <div class="flex flex-row justify-between">
                        <div class="flex flex-row gap-x-2">

                            {project.link === '' ? <div class='hidden'></div> : <a href={`${project.link}`} class="ease-in-out duration-300" target="_blank"><div class="tooltip tooltip-bottom z-99" data-tip="Go to site"><i class="fa fa-external-link text-9xl hover:text-primary font-extralight ease-in-out duration-300"></i></div></a>}

                            {project.githubLink === '' ? <div class='hidden'></div> : <a href={`${project.githubLink}`} class="ease-in-out duration-300" target="_blank"><div class="tooltip tooltip-bottom z-99" data-tip="GitHub repo"><i class="devicon-github-plain text-base hover:text-primary ease-in-out duration-300"></i></div></a>}

                        </div>
                    </div>
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
        <div class="flex flex-row justify-around py-20" id="projects">
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
                <div class="flex flex-col w-full gap-10">
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