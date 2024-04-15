import React from 'react';

function Contact() {
    return (
        <div class="flex flex-row justify-around bg-base-100 py-20">
            <div class="flex flex-col justify-around items-center gap-y-20 w-5/6">

                <h2 class="text-3xl font-bold">
                    <span class="text-primary font-firacode">03.</span>
                    <span> Wanna talk?</span>
                </h2>

                <div class="flex flex-col items-center gap-y-6">
                    <h1 class="text-5xl font-bold">Let's get in touch.</h1>
                    <p class="w-5/12 text-center text-base font-extralight">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit. Adipiscing elit Ut et.</p>
                </div>

                <button class="btn flex flex-col justify-center font-bold text-lg text-center text-base-100 bg-gradient-to-r from-secondary to-primary border-4 border-base-100 hover:border-primary hover:text-primary hover:from-transparent hover:to-transparent duration-500 px-7 py-7"><i class="fa fa-envelope-o font-bold"></i><span>Message me</span></button>

            </div>
        </div>
    );
}

export default Contact;