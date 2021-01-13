import React, { Component } from "react";

import { Link } from "react-router-dom";

import logo from "../images/logo-plain.svg";

import { FaAlignRight, FaArrowCircleUp } from "react-icons/fa";
import { BiHome, BiUser, BiAbacus } from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";

export default class Navbar extends Component {
    state = {
        isOpen: false,
        home: this.props.location.pathname === "/",
        top: true
    };

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    handleEventScroll = () => {
        const scrolled = document.scrollingElement.scrollTop;

        if (scrolled >= 120) {
            if (this.state.top) {
                this.setState({ top: false });
            }
        } else {
            if (!this.state.top) {
                this.setState({ top: true });
            }
        }
    };

    componentDidMount() {
        this.handleEventScroll();

        document.addEventListener("scroll", this.handleEventScroll, true);
    }

    componentDidUpdate(pProps) {
        if (this.props.location.pathname !== pProps.location.pathname) {
            let home = this.props.location.pathname === "/";

            this.setState({
                home: home
            });
        }
    }

    render() {
        let both = this.state.top && this.state.home;

        return (
            // <nav className={both ? "navbar top" : "navbar"}>
            <nav className={both && !this.state.isOpen ? "navbar top" : "navbar"}>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <Link to='/'>
                            <img src={logo} alt='Logo' />
                        </Link>
                        <button className='nav-btn' type='button' onClick={this.handleToggle}>
                            <FaAlignRight className='nav-icon' />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        {/* prettier-ignore */}
                        <li><Link onClick={this.state.isOpen ? this.handleToggle : null} to="/"><BiHome /> Home</Link> </li>
                        {/* prettier-ignore */}
                        <li><Link onClick={this.state.isOpen ? this.handleToggle : null} to="/about"><BiUser /> About me</Link> </li>
                        {/* prettier-ignore */}
                        <li><Link onClick={this.state.isOpen ? this.handleToggle : null} to="/my-uses/"><BiAbacus /> My uses</Link> </li>
                        {/* prettier-ignore */}
                        <li><Link onClick={this.state.isOpen ? this.handleToggle : null} to="/contact"><RiContactsLine /> Contact me</Link> </li>
                    </ul>
                </div>
                <a
                    href={this.props.location.pathname + "#"}
                    className={this.state.top ? "back-to-top top" : "back-to-top"}
                >
                    <FaArrowCircleUp />
                </a>
            </nav>
        );
    }
}
