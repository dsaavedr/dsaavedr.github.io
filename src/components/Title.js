import React from 'react'

export default function Title({ title, subtitle }) {
    return (
        <div className="section-title">
            {title ? <h2>{title}</h2> : null}
            {title ? <div></div> : null}
            {subtitle ? <h4>{subtitle}</h4> : null}
        </div>
    )
}
