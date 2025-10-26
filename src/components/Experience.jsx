import Heading from './Heading';
import Skills from './Skills';
import { LiaUniversitySolid, LiaBriefcaseSolid } from "react-icons/lia";

function ExperienceCard(props) {
    const { type, title, inst, year } = props;

    return (
        <div className="card flex flex-col justify-between gap-y-1 lg:gap-y-2 md:w-[47.5%] lg:w-5/12 bg-base-200 rounded-sm border-[1.5px] border-[var(--color-base-100)] py-8 px-7 z-[0]">
            
            <div className="card-content z-20 relative group">
                <p className="flex flex-row justify-start items-center gap-1 text-[10px] lg:text-xs font-extralight text-primary md:text-base-content md:group-hover:text-primary lg:text-base-content lg:group-hover:text-primary ease-in-out duration-300">
                    <span id="type-icon" className="text-base">
                        {type === "Education" && <LiaUniversitySolid />}
                        {type === "Work Experience" && <LiaBriefcaseSolid />}
                        {type === "Internship" && <LiaBriefcaseSolid />}
                    </span>
                    <span>{type}</span>
                </p>
                <h2 className="text-sm lg:text-lg font-bold pt-4">{title}</h2>
                <p className="text-[10px] lg:text-xs font-extralight font-firacode">{inst}</p>
                <p className="text-[10px] lg:text-xs font-extralight font-firacode">{year}</p>
            </div>

            {/* --- Animation HTML Elements --- */}
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
                </div>

                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
            </div>
            {/* ------------------------------------------------- */}

        </div>
    )
}

function Experience() {
    return ( 
        <div class="flex flex-row justify-around py-20" id="experience">
            <div class="flex flex-col justify-around items-center gap-y-14 md:gap-y-16 lg:gap-y-20 w-5/6">
                <Heading number="02." title="Experience"></Heading>

                <div class="flex flex-col md:flex-row lg:flex-row gap-6 justify-start self-stretch flex-wrap md:px-12 lg:px-12">

                    <ExperienceCard
                        type='Education'
                        title='BS in Computer Science'
                        inst='University of the Philippines Visayas'
                        year='2019 - 2023'>
                    </ExperienceCard>

                    <ExperienceCard
                        type='Internship'
                        title='Fullstack Developer Intern'
                        inst='DevKinetics Inc., Manila, PH'
                        year='2022'>
                    </ExperienceCard>

                    <ExperienceCard
                        type='Work Experience'
                        title='Software Developer'
                        inst='Bangko Kabayan Inc., Iloilo City, PH'
                        year='2024 - Present'>
                    </ExperienceCard>

                </div>

                <Skills></Skills>
            </div>
        </div>
    );
}

export default Experience;