import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Socials(props) {
    return(
        <div className="flex flex-row justify-between items-center w-full gap-3 md:gap-2 lg:gap-2 text-primary">
            <a href="https://www.linkedin.com/in/limuelle-alamil/" target="_blank">
                <div class="text-base hover:text-base-300 ease-in-out duration-300 border-2 border-primary hover:bg-primary rounded-full p-2 lg:p-3">
                    <FaLinkedinIn />
                </div>
            </a>

            <a href="https://www.facebook.com/profile.php?id=100070561390068" target="_blank">
                <div class="text-base hover:text-base-300 ease-in-out duration-300 border-2 border-primary hover:bg-primary rounded-full p-2 lg:p-3">
                    <FaFacebookF />
                </div>
            </a>

            <a href="https://github.com/palimdrome" target="_blank">
                <div class="text-base hover:text-base-300 ease-in-out duration-300 border-2 border-primary hover:bg-primary rounded-full p-2 lg:p-3">
                    <FaGithub />
                </div>
            </a>
        </div>
    )
}

export default Socials;