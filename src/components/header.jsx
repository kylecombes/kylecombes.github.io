import React from 'react';
import GitHubLogoSVG from 'svg-react-loader?name=Icon!../../content/svg/github.svg';
import LinkedInLogoSVG from 'svg-react-loader?name=Icon!../../content/svg/linkedin.svg';
import MyInfo from '../../content/bio';

export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            level: props.level,
            info: MyInfo
        };
    }

    render() {
        const classes = `element biography level-${this.state.level}`;
        return (
            <section className={classes}>
                <span className="element-open">{this.state.info.sectionTitle}</span>
                <div className="element-contents">
                    <div className="portrait-image-container">
                        <img src={this.state.info.portraitPath} className="portrait-image"/>
                    </div>
                    <div className="name-title-container">
                        <span className="name">{this.state.info.name}</span>
                        <span className="divider">|</span>
                        <span className="title">{this.state.info.title}</span>
                    </div>
                    <div className="links-container">
                        <a href={this.state.info.github} alt="GitHub" title="GitHub">
                            <GitHubLogoSVG/>
                        </a>
                        <a href={this.state.info.linkedin} alt="LinkedIn" title="LinkedIn">
                            <LinkedInLogoSVG/>
                        </a>
                    </div>
                </div>
                <span className="element-close">{this.state.info.sectionTitle}</span>
            </section>
        )
    }

}