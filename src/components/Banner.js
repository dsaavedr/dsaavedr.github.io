import React, { useRef, useEffect } from "react";

import { gsap } from "gsap";

export default function Banner({ children, title, subtitle }) {
    const bannerRef = useRef(null);

    useEffect(() => {
        gsap.from(bannerRef.current, {
            autoAlpha: 0,
            ease: "out",
            duration: 1,
            y: 100
        });
    }, []);

    return (
        <div className='banner' ref={bannerRef}>
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    );
}
