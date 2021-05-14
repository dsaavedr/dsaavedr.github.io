import React from "react";

export default function Hero({ children }) {
    return (
        <header className='hero'>
            <iframe
                title='background-animation'
                src='https://dsaavedr.github.io/shy-particles/'
                styles='height: 100vh; width: 100vw'
                frameborder='0'
            ></iframe>
            {children}
        </header>
    );
}
