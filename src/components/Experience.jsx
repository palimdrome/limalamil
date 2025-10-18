import Heading from './Heading';
import Skills from './Skills';
import IconsSmall from './IconsSmall';
import { LiaUniversitySolid, LiaBriefcaseSolid } from "react-icons/lia";

function ExperienceCard(props) {
    var icon = props.icon
    var type = props.type;
    var title = props.title;
    var inst = props.inst;
    var year = props.year

    return (
        <div class="flex flex-col justify-between gap-y-1 lg:gap-y-2 md:w-[47.5%] lg:w-5/12 bg-base-200 rounded-sm border-[1.5px] border-[var(--color-base-100)] py-8 px-7 z-[0]">
            
            <p class="flex flex-row justify-start items-center gap-1 text-[10px] lg:text-xs font-extralight text-primary">
                <span id="type-icon" className="text-base">
                    {type === "Education" && <LiaUniversitySolid />}
                    {type === "Work Experience" && <LiaBriefcaseSolid />}
                    {type === "Internship" && <LiaBriefcaseSolid />}
                </span>
                <span>{type}</span>
            </p>
            <h2 class="text-sm lg:text-lg font-bold pt-4">{title}</h2>
            <p class="text-[10px] lg:text-xs font-extralight font-firacode">{inst}</p>
            <p class="text-[10px] lg:text-xs font-extralight font-firacode">{year}</p>
            
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