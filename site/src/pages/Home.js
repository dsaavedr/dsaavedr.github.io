import React from 'react';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import TextSection from '../components/TextSection';

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="Programming as a lifestyle" subtitle="An ode to programming">
                </Banner>
            </Hero>
            <TextSection title="What's the point of programming?">
                <p>In essence, programming is telling a computer what you want it to do in a language it can understand. As such, it doesn't have a set purpose in the same way most computers themselves don't have a set purpose. Coding can be used for data analysis, mathematical modeling, robotics, software and web development, creating beautiful art, simply making your computer say "hello!", and a myriad of other things constrained only by the coder's imagination. That is the beauty of programming and why this page is dedicated to the act itself and the different ways people employ it in their lives.</p>
            </TextSection>
        </>
    )
}
