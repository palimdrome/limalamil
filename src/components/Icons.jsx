import React from 'react';

function Icons() {

    // Add the icon and color here.
    // https://devicon.dev/
    var icons = [
        ['devicon-html5-plain', '#E54D26'],
        ['devicon-css3-plain', '#3D8FC6'],
        ['devicon-javascript-plain', '#F0DB4F'],
        ['devicon-react-original', '#61DAFB'],
        ['devicon-nextjs-plain', '#F9F9F9'],
        ['devicon-tailwindcss-original', '#38BDF8'],
        ['devicon-php-plain', '#777BB3'],
        ['devicon-mysql-original', '#00618A'],
        ['devicon-firebase-plain', '#FFA000'],
        ['devicon-wordpress-plain', '#3179A1'],
        ['devicon-git-plain', '#F34F29'],
        ['devicon-github-original', '#F9F9F9'],
        ['devicon-figma-plain', '#FF7262'],
        ['devicon-vscode-plain', '#3C99D4']
    ]

    // hover:text-[${icon[1]}]
    const tools = icons.map((icon) => (
        <div class="hover:-translate-x-0.5 hover:scale-125 ease-in-out duration-300 p-3 md:p-4 lg:p-5 group">
            <i class={`${icon[0]} transition duration-300 ease-in-out group-hover:hidden`}></i>
            <i class={`${icon[0]} colored transition duration-300 ease-in-out hidden group-hover:inline-flex`}></i>
        </div>
    ))

    return ( 
        <div class="flex flex-col justify-between gap-y-8 md:w-9/12 lg:w-7/12">
            <h2 class="text-xl lg:text-2xl font-bold text-center">Tools I use to develop</h2>
            <div class="flex justify-center flex-wrap text-3xl md:text-4xl lg:text-5xl">
                {tools}
            </div>
        </div>
     );
}

export default Icons;