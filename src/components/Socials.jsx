import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import CopyToClipboardWrapper from "../wrappers/CopyToClipboardWrapper";

function Socials(props) {

    const emailAddress = "ldc.alamil@gmail.com";

    return(
        <div className="flex flex-row justify-between items-center w-full gap-3 md:gap-2 lg:gap-2 text-primary">
            <a href="https://www.linkedin.com/in/limuelle-alamil/" target="_blank">
                <div class="text-base hover:text-base-300 ease-in-out duration-300 border-2 border-primary hover:bg-primary rounded-full p-2 lg:p-3">
                    <FaLinkedinIn />
                </div>
            </a>

            <a href="https://github.com/palimdrome" target="_blank">
                <div class="text-base hover:text-base-300 ease-in-out duration-300 border-2 border-primary hover:bg-primary rounded-full p-2 lg:p-3">
                    <FaGithub />
                </div>
            </a>

            <a href="https://www.facebook.com/limalamil" target="_blank">
                <div class="text-base hover:text-base-300 ease-in-out duration-300 border-2 border-primary hover:bg-primary rounded-full p-2 lg:p-3">
                    <FaFacebookF />
                </div>
            </a>

            <CopyToClipboardWrapper textToCopy={`${emailAddress}`} tooltipMessage="Email copied :)">
                <a href={`mailto:${emailAddress}`}>
                    <div class="text-base hover:text-base-300 ease-in-out duration-300 border-2 border-primary hover:bg-primary rounded-full p-2 lg:p-3">
                        <SiGmail />
                    </div>
                </a>
            </CopyToClipboardWrapper>
        </div>
    )
}

export default Socials;
