import React, { Component } from 'react';

import data from './carousel-data';

const ProjectContext = React.createContext();

class ProjectProvider extends Component {
    state = {
        projects: [],
        recentProjects: [],
        loading: true
    }

    getData = async () => {
        try {
            let response = data;
            let projects = this.formatData([...response]);
            let recentProjects = projects;

            this.setState({
                loading: false,
                projects: projects,
                recentProjects: recentProjects
            });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getData();
    }

    formatData(data) {
        let tempItems = data.map(item => {
            return item;
        });

        return tempItems;
    }

    render() {
        return (
            <ProjectContext.Provider value={{
                ...this.state
            }}>
                {this.props.children}
            </ProjectContext.Provider>
        )
    }
}

const ProjectConsumer = ProjectContext.Consumer;

export function withProjectConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <ProjectConsumer>
            {value => <Component {...props} context={value} />}
        </ProjectConsumer>
    }
}

export { ProjectProvider, ProjectConsumer, ProjectContext };