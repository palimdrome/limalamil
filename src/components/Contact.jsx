import Button from "./Button";

function Contact() {
    return (
        <div class="flex flex-row justify-around py-20" id="contact">
            <div class="flex flex-col justify-around items-center gap-y-16 w-3/4">

                <h2 class="flex flex-row justify-center items-end w-8/9 md:w-1/2 lg:w-1/2">
                    <span className="text-primary text-base md:text-lg lg:text-lg font-extralight align-bottom">03.</span>
                    <span className="text-base-content text-lg md:text-2xl lg:text-3xl font-bold grow-0 shrink basis-auto mx-4">Wanna talk?</span>
                </h2>

                <div class="flex flex-col justify-center items-center gap-y-6">
                    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center">Let's get in touch.</h1>
                    <p class="w-10/12 md:w-8/12 lg:w-5/12 text-center text-sm md:text-base lg:text-base font-extralight">I am actively looking for a job opportunity where my skills align. If you are looking for a frontend developer, feel free to send me an email.</p>
                </div>

                <div className="flex flex-col md:flex-row lg:flex-row lg:w-1/4 gap-4 justify-center items-center">
                    <Button url="https://drive.google.com/file/d/10xFFplxquS1-AoszcMVFbyL9Xwr6zMSA/view?usp=sharing" target="_blank" action="Download my CV"></Button>
                </div>

            </div>
        </div>
    );
}

export default Contact;