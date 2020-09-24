import React, { Component } from 'react';

import { ProjectContext } from '../context';

import MainSection from '../components/MainSection';
// import Carousel from '../components/Carousel';
import Loading from '../components/Loading';
import PortCards from '../components/PortCards';

export default class Productivity extends Component {
    static contextType = ProjectContext;

    render() {
        let { loading, projects } = this.context;

        return (
            <div className="learning">
                <div className="sections-wrapper">
                    <MainSection title="How I use programming" subtitle="Productivity">
                        <p>
                            One of the first things that made me fall in love with coding was the possibility of automating tedious or repetitive tasks, as well as making processes much more efficient. After learning to use Powershell and creating Batch files, I quickly got wind of <a href="https://www.autohotkey.com/" target="_blank" rel="noopener noreferrer">AutoHotKey</a>, a scripting language for Windows that allows you to define hotkeys or macros to your mouse or keyboard, remap any key or button, replace strings, among others. This tool changed the way I interact with my computer on a daily bases and I continue to use to this day, and these are some of the scripts that I've created or compiled:
                        </p>
                    </MainSection>
                    <MainSection>
                        {loading ? <Loading /> : <PortCards data={projects} />}
                    </MainSection>
                </div>
            </div>
        )
    }
}
