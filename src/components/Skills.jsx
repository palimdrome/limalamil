function ToolsCard(props) {
    var type = props.type

    var tools = props.tools
    // console.log(tools)

    const displayTools = tools.map((tool) => (
        // console.log(tool[0])
        <div class="flex flex-col justify-between items-center w-1/5 gap-y-2 pt-3">
            <i class={`${tool[0]} text-3xl lg:text-4xl`}></i>
            <span className="text-[6px] lg:text-[10px] font-extralight">{`${tool[1]}`}</span>
        </div>
    ))

    return (
        <div className="flex flex-col justify-between gap-y-1 lg:gap-y-2 md:w-[47.5%] lg:w-5/12 bg-base-200 rounded-sm border-[1.5px] border-[var(--color-base-100)] py-4 px-4 z-[0]">
            <p class="text-[10px] lg:text-xs font-extralight font-firacode text-primary px-4 py-2">{type}</p>
            <div className="flex flex-row justify-around gap-y-1 lg:gap-y-2">
                {displayTools}
            </div>
        </div>
    )
}

function Icons() {

    // https://devicon.dev/
    return ( 
        <div class="flex flex-col justify-between gap-y-8 w-full md:px-12 lg:px-12">
            <h2 class="text-base md:text-lg lg:text-lg font-bold text-start">Tools I use to develop</h2>
            <div className="flex flex-col md:flex-row lg:flex-row gap-6 justify-start self-stretch flex-wrap">
                <ToolsCard
                    type="Frontend"
                    tools={[
                        ['devicon-html5-plain', 'HTML', '#E54D26'],
                        ['devicon-css3-plain', 'CSS', '#3D8FC6'],
                        ['devicon-javascript-plain', 'JavaScript', '#F0DB4F'],
                        ['devicon-react-original', 'ReactJS', '#61DAFB'],
                        ['devicon-tailwindcss-original', 'Tailwind', '#38BDF8'],
                    ]}>
                </ToolsCard>

                <ToolsCard
                    type="Backend"
                    tools={[
                        ['devicon-php-plain', 'PHP', '#777BB3'],
                        ['devicon-mysql-original', 'MySQL', '#00618A'],
                        ['devicon-laravel-original', 'Laravel', '#f0513f'],
                        ['devicon-firebase-plain', 'Firebase', '#FFA000'],
                    ]}>
                </ToolsCard>

                <ToolsCard
                    type="Other Tools"
                    tools={[
                        ['devicon-git-plain', 'Git', '#F34F29'],
                        ['devicon-github-original', 'GitHub', '#F9F9F9'],
                        ['devicon-python-plain', 'Python'],
                        ['devicon-figma-plain', 'Figma', '#FF7262'],
                        ['devicon-vscode-plain', 'VS Code', '#3C99D4'],
                    ]}>
                </ToolsCard>
            </div>
        </div>
     );
}

export default Icons;