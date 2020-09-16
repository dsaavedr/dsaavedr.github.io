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
            }
        ]
    }

    render() {
        return (
            <article className="testimonials">
                {this.state.cards.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            img={item.img}
                            desc={item.desc} />
                    );
                })}
            </article>
        )
    }
}
