import React from 'react';

function Contact() {
    return (
        <div class="flex flex-row justify-around bg-base-100 py-20" id="contact">
            <div class="flex flex-col justify-around items-center gap-y-16 w-5/6">

                <h2 class="text-2xl lg:text-3xl font-bold">
                    <span class="text-primary font-firacode">03.</span>
                    <span> Wanna talk?</span>
                </h2>

                <div class="flex flex-col items-center gap-y-6">
                    <h1 class="text-4xl font-bold text-center">Let's get in touch.</h1>
                    <p class="w-10/12 md:w-8/12 lg:w-5/12 text-center text-sm md:text-base lg:text-base font-extralight font-firacode">I am actively looking for a job opportunity where my skills align. If you are looking for a frontend developer, feel free to send me an email.</p>
                </div>

                <a href="mailto:ldc.alamil@gmail.com" target="_blank"><button class="flex flex-row justify-center items-center gap-x-2 font-bold text-sm md:text-base lg:text-lg text-center text-base-100 bg-gradient-to-r from-secondary to-primary rounded-lg border-2 md:border-3 lg:border-4 border-base-100 hover:border-primary hover:text-primary hover:from-transparent hover:to-transparent duration-500 px-5 lg:px-6 py-3"><i class="fa fa-envelope-o font-bold"></i><span>Message me</span></button></a>

            </div>
        </div>
    );
}

export default Contact;