import React, { Component } from 'react';

import { ProjectContext } from '../context';

import Card from './Card';
import Loading from './Loading';

export default class Creators extends Component {
    static contextType = ProjectContext;

    render() {
        let { loading, showcase } = this.context;
        let arr = showcase.filter(item => item.type === "video");

        arr = arr.map((item, index) => {
            if (item.video) {
                return <Card
                    key={index}
                    title={item.title}
                    video={item.video}
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
