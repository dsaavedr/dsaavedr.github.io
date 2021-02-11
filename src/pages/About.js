import React, { Component } from "react";

import { gsap } from "gsap";

import MainSection from "../components/MainSection";
import Loading from "../components/Loading";

import Client from "../Contentful";

export default class About extends Component {
    constructor(props) {
        super();

        this.element = null;
        this.tween = null;

        this.state = {
            url: "",
            title: "",
            loading: true
        };
    }

    componentDidMount() {
        this.fetchImage();
        this.tween = gsap.from(this.element, {
            autoAlpha: 0,
            ease: "out",
            duration: 1
        });
    }

    fetchImage = async () => {
        try {
            const response = await Client.getAsset("5hxm8LnHTL7j8mS3n2VOQ7");

            const { title } = response.fields;
            const { url } = response.fields.file;

            this.setState({
                title,
                url,
                loading: false
            });
        } catch (err) {
            console.error(err);
        }
    };

    render() {
        const { url, title, loading } = this.state;

        return (
            <div className='sections-wrapper'>
                <MainSection title="Hi! I'm Daniel">
                    <div id='about' ref={div => (this.element = div)}>
                        <div className='image'>
                            {loading ? <Loading /> : <img src={url} alt={title} />}
                        </div>
                        <div className='body'>
                            <p>
                                I've been incorporating programming into my life for years now. What
                                began as a way of interacting more efficiently with my PC and
                                dealing with course work from University, quickly became the thing
                                that I enjoy doing most:{" "}
                                <em>Full-Stack Development, Animation &amp; Data Analysis.</em>
                            </p>
                            <h3>My Skills</h3>
                            <div id='skills'>
                                <div className='block'>
                                    <h4>Full-Stack Development</h4>
                                    <ul>
                                        <li>Express</li>
                                        <li>NodeJS</li>
                                        <li>MongoDB</li>
                                        <li>MySQL</li>
                                        <li>HTML &amp; CSS</li>
                                        <li>Javascript</li>
                                        <li>React</li>
                                        <li>Redux</li>
                                        <li>Vue.js</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </div>
                                <div className='block'>
                                    <h4>Data Analysis</h4>
                                    <ul>
                                        <li>Stata</li>
                                        <li>Python</li>
                                        <li>R</li>
                                        <li>D3.js</li>
                                        <li>Power BI</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </MainSection>
            </div>
        );
    }
}
