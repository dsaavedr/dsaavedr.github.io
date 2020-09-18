import React from 'react'

export default function Title({ title, subtitle }) {
    return (
        <div className="section-title">
            <h2>{title}</h2>
            <div></div>
            {subtitle ? <h4>{subtitle}</h4> : null}
        </div>
    )
}
