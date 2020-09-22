import React from 'react'

export default function Slide({ url, title, desc, redirect }) {
    const style = {
        backgroundImage: `url(${url})`,
        mouse: "pointer"
    }

    return (
        <div className="slide-img" style={style}>
            <div className="caption">
                <a href={redirect} target="_blank" rel="noopener noreferrer">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </a>
            </div>
        </div>
    )
}