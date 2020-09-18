import React from 'react'

export default function Slide({ url, title, desc }) {
    const style = {
        backgroundImage: `url(${url})`
    }

    return (
        <div className="slide-img" style={style} >
            <div className="caption">
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </div>
    )
}