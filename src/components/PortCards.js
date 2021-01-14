import React, { useRef, useEffect } from "react";

import { TweenMax } from "gsap";

import PortCard from "./PortCard";

export default function PortCards({ data }) {
    const cardRef = useRef([]);

    useEffect(() => {
        console.log(cardRef);

        TweenMax.staggerFrom(
            cardRef.current,
            0.8,
            {
                autoAlpha: 0,
                y: +100
            },
            0.3
        );
    }, []);

    const cards = data.map((item, index) => {
        return (
            <PortCard
                key={index}
                data={item}
                ref={el => {
                    cardRef.current[index] = el;
                }}
            />
        );
    });

    return <div className='portCards-wrapper'>{cards}</div>;
}
