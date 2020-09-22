import React from 'react';

import { FaCodepen, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { RiHeart3Line } from 'react-icons/ri';

export default function Footer() {
    return (
        <footer>
            <div className="copyright">
                &copy; Daniel Saavedra. All Rights Reserved.
            </div>
            <div className="designedBy">
                Designed with <RiHeart3Line className="heart" /> by <a target="_blank" href="https://github.com/dsaavedr">Daniel Saavedra</a>.
            </div>
            <div className="icons">
                <a target="_blank" href="https://codepen.io/dsaavedr"><FaCodepen /></a>
                <a target="_blank" href="https://github.com/dsaavedr"><FaGithub /></a>
                <a target="_blank" href="https://www.instagram.com/danielsm14/"><FaInstagram /></a>
                <a target="_blank" href="mailto:danielsaavedram@hotmail.com"><FaEnvelope /></a>
            </div>
        </footer>
    )
}
