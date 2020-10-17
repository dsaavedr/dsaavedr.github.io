import React, { Component } from 'react';

import showcaseData from './showcase-data';
// import projectsData from './projects-data';

import Client from './Contentful';

const ProjectContext = React.createContext();

class ProjectProvider extends Component {
    state = {
        showcase: [],
        projects: [],
        recentProjects: [],
        filteredProjects: [],
        featured: [],
        filter: "all",
        loading: true
    }

    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "programmingProject",
                order: "sys.createdAt"
            });

            let projects = this.formatData(response.items);

            let recent = [...projects];
            recent = recent.sort((a, b) => a.date - b.date).reverse().slice(0, 3);

            let featured = projects.filter(item => item.showcase === true);

            let showcase = showcaseData;

            this.setState({
                loading: false,
                recentProjects: recent,
                projects: projects,
                filteredProjects: projects,
                featured: featured,
                showcase: showcase
            });
        } catch (error) {
            console.log(error);
        }

        /* setTimeout(() => {
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
        }, 2000); // Simulate delay */
    }

    componentDidMount() {
        this.getData();
    }

    formatData(data) {
        let tempItems = data.map(item => {
            let id = item.sys.id;
            let img = item.fields.imageLarge.fields.file.url;
            let created = item.sys.createdAt;

            let project = {
                id,
                created: new Date(created),
                ...item.fields,
                img: img
            };

            return project;
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