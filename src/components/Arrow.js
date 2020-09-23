import React, { Component } from 'react';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export default class LeftArrow extends Component {
    render() {
        let direction = this.props.direction;

        return (
            <div
                className={`arrow ${direction} btn-primary`}
                onClick={this.props.handleClick}
            >
                {direction === 'right' ? <FaAngleRight /> : <FaAngleLeft />}
            </div>
        )
    }
}
