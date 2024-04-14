import React from 'react';

function Icons() {
    return ( 
        <div class="flex flex-col justify-between gap-y-8 w-7/12">
            <h2 class="text-2xl font-bold text-center">Tools I use to develop</h2>
            <div class="flex justify-center flex-wrap [&>div]:p-5 [&_i]:transition [&_i]duration-300 [&_i]ease-in-out text-5xl">
                <div class=""><i class="devicon-html5-plain hover:text-[#E54D26]"></i></div>
                <div><i class="devicon-css3-plain hover:text-[#3D8FC6]"></i></div>
                <div><i class="devicon-javascript-plain hover:text-[#F0DB4F]"></i></div>
                <div><i class="devicon-react-original hover:text-[#61DAFB]"></i></div>
                <div><i class="devicon-nextjs-plain hover:text-[#F9F9F9]"></i></div>
                <div><i class="devicon-tailwindcss-original hover:text-[#38BDF8]"></i></div>
                <div><i class="devicon-php-plain hover:text-[#777BB3]"></i></div>
                <div><i class="devicon-mysql-original hover:text-[#00618A]"></i></div>
                <div><i class="devicon-firebase-plain hover:text-[#FFA000]"></i></div>
                <div><i class="devicon-wordpress-plain hover:text-[#3179A1]"></i></div>
                <div><i class="devicon-git-plain hover:text-[#F34F29]"></i></div>
                <div><i class="devicon-github-original hover:text-[#F9F9F9]"></i></div>
                <div><i class="devicon-figma-plain hover:text-[#FF7262]"></i></div>
                <div><i class="devicon-vscode-plain hover:text-[#3C99D4]"></i></div>
            </div>
        </div>
     );
}

export default Icons;