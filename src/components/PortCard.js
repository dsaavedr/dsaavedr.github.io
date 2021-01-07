import React from "react";
import ReactGA from "react-ga";

import { FaLink } from "react-icons/fa";

export default function PortCard({ data }) {
    function track() {
        ReactGA.event({
            category: "Project",
            action: "User clicked on project link"
        });
    }

    return (
        <div className='portCard'>
            <img src={data.img} alt={data.title} />
            <div className='content'>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                {data.url ? (
                    <a onClick={track} href={data.url} target='_blank' rel='noopener noreferrer'>
                        <FaLink />
                    </a>
                ) : (
                    <FaLink className='inactive' />
                )}
            </div>
        </div>
    );
}
