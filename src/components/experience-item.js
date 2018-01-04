import React from 'react';
import SectionWrapper from './section-wrapper';
import Technologies from '../../content/technologies';

export default class ExperienceItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: props.info.type,
            info: props.info,
            technologies: Technologies,
        }
    }

    render() {

        const technologies = this.state.technologies;
        const technologiesList = [];
        this.state.info.technologies.forEach(technologyName => {
            const info = technologies[technologyName];
            if (info) {
                technologiesList.push(<a href={info.website} alt={info.displayName} title={`${info.displayName}: ${info.briefDescription}`}
                                         key={technologyName} target="_blank">{info.svg}</a>);
            } else {
                console.warn(`Could not find technology "${technologyName} in technologies.js.`);
            }

        });

        const classes = `position${this.state.info.current ? ' current' : ''} level-${this.props.level}`;

        return (
            <SectionWrapper className={classes} title={this.state.title}>
                <div className="element-contents">
                    <div className="position-header">
                        <div className="position-header-text">
                            <a className="title" href={this.state.info.website} alt={this.state.info.linkDescription} title={this.state.info.linkDescription}>
                                {this.state.info.title}
                            </a>
                            <span className="role">{this.state.info.role}</span>
                            <span className="location">{this.state.info.location}</span>
                            <span className="period">{this.state.info.period}</span>
                        </div>
                        <div className="company-logo">
                            <a href={this.state.info.website} alt={this.state.title} title={this.state.info.linkDescription}>{this.state.info.logo}</a>
                        </div>
                    </div>
                    <div className="description">
                        {this.props.info.description}
                    </div>
                    <div className="technologies">
                        {technologiesList}
                    </div>
                </div>
            </SectionWrapper>
        )
    }
    
}