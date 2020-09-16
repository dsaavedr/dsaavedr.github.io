import React from 'react'

export default function Card({ img, title, subtitle, desc }) {
    return (
        <div className="card-container">
            <div className="card-header">
                <h4>{title}</h4>
                {subtitle ? <h6>{subtitle}</h6> : null}
            </div>
            <img src={img.src} alt={img.alt} />
            <p>{desc}</p>
        </div>
    )
}
