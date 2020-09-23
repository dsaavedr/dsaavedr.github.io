import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import logo from '../images/logo-plain.svg';

import { FaAlignRight, FaArrowCircleUp } from 'react-icons/fa';
import { BiHome, BiUser, BiAbacus } from 'react-icons/bi';

export default class Navbar extends Component {
    state = {
        isOpen: false,
        home: this.props.location.pathname === "/",
        top: true
    }

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    handleEventScroll = () => {
        const scrolled = document.scrollingElement.scrollTop;

        if (scrolled >= 120) {
            if (this.state.top) {
                this.setState({ top: false })
            }
        } else {
            if (!this.state.top) {
                this.setState({ top: true })
            }
        }
    }

    componentDidMount() {
        this.handleEventScroll();

        document.addEventListener('scroll', this.handleEventScroll, true);
    }

    componentDidUpdate(pProps) {
        if (this.props.location.pathname !== pProps.location.pathname) {
            let home = this.props.location.pathname === "/";

            this.setState({
                home: home
            });

            // document.addEventListener('scroll', this.handleEventScroll, true);
        }

    }

    render() {
        let both = this.state.top && this.state.home;

        return (
            <nav className={both ? "navbar top" : "navbar"}>
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                        <button className="nav-btn" type="button" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li><Link to="/"><BiHome /> Home</Link> </li>
                        <li><Link to="/"><BiUser /> About me</Link> </li>
                        <li><Link to="/my-uses/learning"><BiAbacus /> My uses</Link> </li>
                    </ul>
                </div>
                <a href="/#" className={this.state.top ? "back-to-top top" : "back-to-top"}><FaArrowCircleUp /></a>
            </nav>
        )
    }
}
