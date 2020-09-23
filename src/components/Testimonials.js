import React, { Component } from 'react';

import { ProjectContext } from '../context';

import Card from './Card';
import Loading from './Loading';

export default class Testimonials extends Component {
    static contextType = ProjectContext;

    render() {
        let { loading, showcase } = this.context;
        let arr = showcase.filter(item => item.type === "testimonial");

        arr = arr.map((item, index) => {
            if (item.img) {
                return <Card
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    img={item.img}
                    desc={item.desc} />
            }
            return null;
        });

        return (
            <article className="testimonials">
                {loading ? <Loading /> : arr}
            </article>
        )
    }
}
