import React from 'react';

import MainSection from '../components/MainSection';
import Carousel from '../components/Carousel';

export default function Learning() {
    return (
        <div className="learning">
            <Carousel />
            <MainSection title="How I use programming" subtitle="Learning | Small projects">
                <p>
                    As a part of my web development learning process, I started following several small tutorials and challenges and ultimately found <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freeCodeCamp.org</a>, a full-stack web development course for which I created a few small projects. Here are some of those and a letter-counting app I made out of curiosity of the frequency distribution of letters in english versus spanish.
                </p>
            </MainSection>


        </div>
    )
}
