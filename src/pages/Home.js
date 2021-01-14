import React, { useContext, useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import MainSection from "../components/MainSection";
import Testimonials from "../components/Testimonials";
import Carousel from "../components/Carousel";
import Creators from "../components/Creators";
import Loading from "../components/Loading";

import { ProjectContext } from "../context";

export default function Home() {
    const { featured, loading } = useContext(ProjectContext);

    gsap.registerPlugin(ScrollTrigger);

    const revealRefs = useRef([]);
    revealRefs.current = [];

    const addToRefs = el => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    useEffect(() => {
        revealRefs.current.forEach((i, idx) => {
            gsap.fromTo(
                i,
                {
                    autoAlpha: 0,
                    y: -50
                },
                {
                    duration: 1,
                    autoAlpha: 1,
                    ease: "out",
                    scrollTrigger: {
                        id: `section-${idx + 1}`,
                        trigger: i,
                        start: "top center+=300",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, []);

    return (
        <>
            <Hero>
                <Banner
                    title='Programming as a lifestyle'
                    subtitle='An ode to programming | portfolio'
                >
                    <p className='smaller'>by</p>
                    <p className='bold'>Daniel Saavedra</p>
                </Banner>
            </Hero>
            <div className='sections-wrapper'>
                <MainSection title="What's the point of programming?" ref={addToRefs}>
                    <p>
                        In essence, programming is telling a computer what you want it to do in a
                        language it can understand. As such, it doesn't have a set purpose in the
                        same way most computers themselves don't have a set purpose. Coding can be
                        used for data analysis, mathematical modeling, robotics, software and web
                        development, creating beautiful art, simply making your computer say
                        "hello!", and a myriad of other things constrained only by the coder's
                        imagination. That is the beauty of programming and why this page is
                        dedicated to the act itself and the different ways people employ it in their
                        lives.
                    </p>
                </MainSection>
                <MainSection title='How do people use it? - Practical applications' ref={addToRefs}>
                    <Testimonials />
                </MainSection>
                <MainSection title='How do people use it? - Creativity' ref={addToRefs}>
                    <Creators />
                </MainSection>
                <MainSection title='How do people use it? - My featured projects' ref={addToRefs}>
                    {loading ? <Loading /> : <Carousel data={featured} />}
                </MainSection>
            </div>
        </>
    );
}
