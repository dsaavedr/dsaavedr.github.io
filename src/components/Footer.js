import React from "react";
import ReactGA from "react-ga";

import { FaCodepen, FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { RiHeart3Line } from "react-icons/ri";

export default function Footer() {
    function track() {
        ReactGA.event({
            category: "Social",
            action: "User clicked on social link in footer"
        });
    }

    return (
        <footer>
            <div className='copyright'>&copy; 2020. All Rights Reserved.</div>
            <div className='designedBy'>
                Designed with <RiHeart3Line className='heart' /> by{" "}
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/dsaavedr'>
                    Daniel Saavedra
                </a>
                .
            </div>
            <div className='icons'>
                {/* prettier-ignore */}
                <a onClick={track} target="_blank" rel="noopener noreferrer" href="https://codepen.io/dsaavedr"><FaCodepen /></a>
                {/* prettier-ignore */}
                <a onClick={track} target="_blank" rel="noopener noreferrer" href="https://github.com/dsaavedr"><FaGithub /></a>
                {/* prettier-ignore */}
                <a onClick={track} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/danielsm14/"><FaInstagram /></a>
                {/* prettier-ignore */}
                <a onClick={track} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/daniel-saavedra-988717121/"><FaLinkedin /></a>
                {/* prettier-ignore */}
                <a onClick={track} target="_blank" rel="noopener noreferrer" href="mailto:danielsaavedram@hotmail.com"><FaEnvelope /></a>
            </div>
        </footer>
    );
}
