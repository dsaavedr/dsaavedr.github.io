import React from 'react';

import Iframe from './Iframe';

import { FaQuoteLeft } from 'react-icons/fa';

export default function Card({ img, title, subtitle, desc, video }) {
    return (
        <div className="card-container">
            <div className="card-header">
                <h4>{title}</h4>
                {subtitle ? <h6>{subtitle}</h6> : null}
            </div>
            {img ? <img src={img.src} alt={img.alt} /> : <Iframe title={title} url={video} w="300" h="169"></Iframe>}
            {img ? <FaQuoteLeft className="card-quote" /> : null}
            <p>{desc}</p>
        </div>
    )
}
