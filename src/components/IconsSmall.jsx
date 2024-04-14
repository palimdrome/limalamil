import React from 'react';

function IconsSmall() {
    return ( 
        <div class="flex flex-col justify-between gap-y-8 w-6/12">
            <h2 class="text-xl font-bold text-center">Other tools I'm familiar with</h2>
            <div class="flex justify-center flex-wrap [&>div]:p-5 [&_i]:transition [&_i]duration-300 [&_i]ease-in-out text-4xl">
                <div class=""><i class="devicon-python-plain"></i></div>
                <div class=""><i class="devicon-java-plain"></i></div>
                <div class=""><i class="devicon-c-line"></i></div>
                <div class=""><i class="devicon-kotlin-plain"></i></div>
                <div class=""><i class="devicon-androidstudio-plain"></i></div>
                <div class=""><i class="devicon-postman-plain"></i></div>
                <div class=""><i class="devicon-jupyter-plain-wordmark"></i></div>
                <div class=""><i class="devicon-latex-original"></i></div>
                <div class=""><i class="devicon-canva-original"></i></div>
            </div>
        </div>
     );
}

export default IconsSmall;