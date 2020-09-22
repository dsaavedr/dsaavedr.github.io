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
        this.setState({ isOpen: !this.state.isOpen })
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
        this.setState({ top: this.state.home });

        if (this.state.home) {
            document.addEventListener('scroll', this.handleEventScroll, true);
        }
    }

    componentDidUpdate(pProps) {
        if (this.props.location.pathname !== pProps.location.pathname) {
            let home = this.props.location.pathname === "/";

            this.setState({
                home: home,
                top: home
            });

            if (home) {
                document.addEventListener('scroll', this.handleEventScroll, true);
            } else {
                document.removeEventListener('scroll', this.handleEventScroll, true);
            }
        }

    }

    render() {
        return (
            <nav className={this.state.top ? "navbar top" : "navbar"}>
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
                <a href="#" className="back-to-top"><FaArrowCircleUp /></a>
            </nav>
        )
    }
}
