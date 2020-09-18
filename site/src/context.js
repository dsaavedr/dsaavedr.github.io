import React, { Component } from 'react';

import showcaseData from './showcase-data';
import projectsData from './projects-data';

const ProjectContext = React.createContext();

class ProjectProvider extends Component {
    state = {
        showcase: [],
        projects: [],
        recentProjects: [],
        loading: true
    }

    getData = async () => {
        setTimeout(() => {
            try {
                let response = projectsData;
                let projects = this.formatData([...response]);
                response = showcaseData;
                let showcase = this.formatData([...response]);
                let recentProjects = projects;

                this.setState({
                    loading: false,
                    showcase: showcase,
                    projects: projects,
                    recentProjects: recentProjects
                });
            } catch (error) {
                console.log(error);
            }
        }, 2000); // Simulate delay
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