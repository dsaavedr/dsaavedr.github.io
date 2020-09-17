import React, { Component } from 'react';

import Card from './Card';

export default class Testimonials extends Component {
    state = {
        cards: [
            {
                title: "Mauricio",
                subtitle: "Biomedical Engineer",
                img: {
                    src: "https://via.placeholder.com/300x169",
                    alt: "Photo"
                },
                desc: "Programming is a tool that I use to get things done efficiently throughout many activities in my life. The way I use programming ranges from simple calculations, to optimizing goods for a party with limited resources, to the automation of repetitive processes at work such as the download, consolidation and comparison of files."
            },
            {
                title: "Nathalia",
                subtitle: "Chemical Engineer",
                img: {
                    src: "https://via.placeholder.com/300x169",
                    alt: "Photo"
                },
                desc: "I use it to enhance my productivity by automating processes that are carried out manually, reduce the amount of time and effort invested in accomplishing any task, eliminate human errors that affect the outcome and quality of my deliverables and analyze and simplify large data sets to make well informed business and financial decisions."
            },
            {
                title: "Daniel",
                subtitle: "Economist",
                img: {
                    src: "https://via.placeholder.com/300x169",
                    alt: "Photo"
                },
                desc: "To me programming is everything. It's the way through wich I can materialize my ideas, expand my knowledge and an excuse to stay in touch with people I hold dear. In my personal life I use it for philantropy, automation around the house and to satisfy my curiosity."
            },
            {
                title: "Mark",
                video: "https://www.youtube.com/embed/a_TSR_v07m0",
                desc: "Mark Rober, a former NASA engineer, now runs a Youtube channel where he showcases his heterogenous inventions and solutions. Here, he created a trap-box to lightly punish package thieves. All of its electronics are programmed to work as he envisioned them."
            },
            {
                title: "Daniel",
                video: "https://www.youtube.com/embed/EYLWxwo1Ed8",
                desc: "Daniel Shiffman creates wonderful free coding courses on his \"Coding train\" Youtube channel. Here, he visualizes the sequence that birthed the Collatz conjecture, creating a stunning pattern."
            },
            {
                title: "Ana",
                video: "https://www.youtube.com/embed/eMDOU8LqGM4",
                desc: "Ana Tudor creates beautiful visuals using pure CSS. Here, she shows how to create a double helix with a 3D effect."
            }
        ]
    }

    render() {
        let arr;

        if (this.props.type === "people") {
            arr = this.state.cards.map((item, index) => {
                if (item.img) {
                    return (
                        <Card
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            img={item.img}
                            desc={item.desc} />
                    );
                }
            })
        } else {
            arr = this.state.cards.map((item, index) => {
                if (item.video) {
                    return (
                        <Card
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            video={item.video}
                            desc={item.desc} />
                    );
                }
            });
        }

        return (
            <article className="testimonials">
                {arr}
            </article>
        )
    }
}
