import React from 'react'

export default function Hero({ children }) {
    return (
        <div>
            <header className="hero">
                {children}
            </header>
        </div>
    )
}
