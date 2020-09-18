import React, { Component } from 'react';

import Slide from './Slide';
import Arrow from './Arrow';

import Data from '../projects-data';

export default class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            data: Data
        }

        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    prevSlide() {
        let index = this.state.current;
        let length = this.state.data.length;

        index === 0 ? index = length - 1 : index--;

        this.setState({ current: index });
    }

    nextSlide() {
        let index = this.state.current;
        let length = this.state.data.length;

        index === length - 1 ? index = 0 : index++;

        this.setState({ current: index });
    }

    render() {
        let item = this.state.data[this.state.current];

        return (
            <div className="carousel">
                <Arrow
                    direction="left"
                    handleClick={this.prevSlide} />

                <Slide url={item.img} title={item.title} desc={item.desc} />

                <Arrow
                    direction="right"
                    handleClick={this.nextSlide} />
            </div>
        )
    }
}
