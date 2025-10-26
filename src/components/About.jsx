import Heading from './Heading';

function About() {
    return ( 
        <div class="flex flex-row justify-around py-20" id="about">
            <div class="flex flex-col justify-around items-center gap-y-14 md:gap-y-16 lg:gap-y-20 w-5/6">
                <Heading number="01." title="About me"></Heading>

                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-20 items-center md:px-12 lg:px-12">
                    <div className="w-full">
                        <p className="text-sm lg:text-base md:text-base text-base-content">
                            Hi, I’m <span className="text-primary">Limuelle Alamil</span> from Iloilo City, Philippines. I finished my bachelor’s degree in Computer Science at the <span className="text-primary">University of the Philippines Visayas</span> in 2023.
                            <br></br>
                            <br></br>
                            I am currently working as a <span className="text-primary">software developer</span> slash accounting support at a <span className="text-primary">private development bank</span> in Iloilo City, mixing programming and a little bit of accounting to bring value to my company.
                            <br></br>
                            <br></br>
                            I bring <span className="text-primary">creativity</span> and attention to detail to every project, always eager to learn and improve. My work focuses on building <span className="text-primary">efficient web applications</span>, designing <span className="text-primary">user-friendly solutions</span>, and solving real-world problems through code.
                        </p>
                    </div>
                    <div className="w-3/4 md:w-1/2 lg:w-1/2 aspect-square overflow-hidden">
                        <img className="object-cover w-full h-full" src="public\assets\hero.webp" alt="My profile picture" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;