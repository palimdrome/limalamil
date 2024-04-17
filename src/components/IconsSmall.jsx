import React from 'react';

function IconsSmall() {

    var icons = [
        'devicon-python-plain',
        'devicon-java-plain',
        'devicon-c-line',
        'devicon-kotlin-plain',
        'devicon-androidstudio-plain',
        'devicon-postman-plain',
        'devicon-jupyter-plain-wordmark',
        'devicon-latex-original',
        'devicon-canva-original'
    ]

    const tools = icons.map((icon) => (
        <div class="p-3 md:p-4 lg:p-5"><i class={`${icon} transition duration-300 ease-in-out`}></i></div>
    ))

    return ( 
        <div class="flex flex-col justify-between gap-y-8 w-11/12 md:w-7/12 lg:w-6/12">
            <h2 class="text-lg lg:text-xl font-bold text-center">Other tools I'm familiar with</h2>
            <div class="flex justify-center flex-wrap text-2xl md:text-3xl lg:text-4xl">
                {tools}
            </div>
        </div>
     );
}

export default IconsSmall;