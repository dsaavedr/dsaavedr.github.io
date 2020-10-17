import React, { Component } from 'react';

import { ProjectContext } from '../context';

import Loading from '../components/Loading';
import MainSection from '../components/MainSection';
import PortCards from '../components/PortCards';
import UsesSelection from '../components/UsesSelection';

import pages from '../pages-manifest';

import Learning from './Learning';
import Art from './Art';
import Productivity from './Productivity';
import All from './All';

export default class Uses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: 0,
            projects: []
        }

        this.show = this.show.bind(this);
    }

    static contextType = ProjectContext;

    componentDidMount() {
        this.show({ target: { id: this.state.show } });

        this.setState({ projects: this.context.projects });
    }

    show(e) {
        this.setState({
            show: e.target.id
        });
    }

    render() {
        const { loading, projects } = this.context;
        let { show } = this.state;
        let page;

        show = parseInt(show);

        const filtered = projects.filter(item => {
            return show === 0 ? true : item.types.includes(pages[show].id);
        });

        if (show === 3) {
            page = <Productivity />
        } else if (show === 2) {
            page = <Learning />
        } else if (show === 1) {
            page = <Art />
        } else {
            page = <All />
        }

        return (
            <div>
                <MainSection title="How I use programming" subtitle={pages[show].text}>
                    <UsesSelection active={this.state.show} click={this.show} />
                    {page}
                </MainSection>
                <MainSection>
                    {loading ? <Loading /> : <PortCards data={filtered} />}
                </MainSection>
            </div>
        )
    }
}

