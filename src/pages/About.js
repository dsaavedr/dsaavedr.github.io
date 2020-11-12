import React, { Component } from "react";

import MainSection from "../components/MainSection";
import Loading from "../components/Loading";

import Client from "../Contentful";

export default class About extends Component {
    constructor(props) {
        super();

        this.state = {
            url: "",
            title: "",
            loading: true
        };
    }

    componentDidMount() {
        this.fetchImage();
    }

    fetchImage = async () => {
        try {
            const response = await Client.getAsset("5hxm8LnHTL7j8mS3n2VOQ7");
            console.log(response);

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
                    <div id='about'>
                        <div className='image'>
                            {loading ? <Loading /> : <img src={url} alt={title} />}
                        </div>
                        <div className='body'>
                            <h3>Full-Stack Web Developer</h3>
                        </div>
                        <p></p>
                    </div>
                </MainSection>
            </div>
        );
    }
}
