import React, { Component } from 'react';

import { ProjectContext } from '../context';

import MainSection from '../components/MainSection';
// import Carousel from '../components/Carousel';
import Loading from '../components/Loading';
import PortCards from '../components/PortCards';

export default class Art extends Component {
    static contextType = ProjectContext;

    render() {
        let { loading, projects } = this.context;

        return (
            <div className="learning">
                <div className="sections-wrapper">
                    <MainSection title="How I use programming" subtitle="Art | Curiosity">
                        <p>
                            A big part of development is user experience. Although its design can be very technical, it involves a great deal of creativity and, along with the design of the page, can turn the end product into a piece of art. Here are a few websites that showcase my point:
                        </p>
                        <ul>
                            <li><a href="http://www.feedmusic.com/" target="_blank">feedmusic.com</a></li>
                            <li><a href="https://www.etq-amsterdam.com/" target="_blank">etq-amsterdam.com</a></li>
                            <li><a href="http://www.mikiyakobayashi.com/" target="_blank">mikiyakobayashi.com</a></li>
                            <li><a href="http://movie-mark.com/" target="_blank">movie-mark.com</a></li>
                        </ul>
                        <p>The immense versatility of these tools not only allows you to create beautiful and functional websites, but stand-alone art, animations and effects. These are some of the things I've come up with:</p>
                    </MainSection>
                    <MainSection>
                        {loading ? <Loading /> : <PortCards data={projects} />}
                    </MainSection>
                </div>
            </div>
        )
    }
}
