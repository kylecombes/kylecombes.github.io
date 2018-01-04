import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/header";
import SectionWrapper from "./components/section-wrapper";
import ExperienceItem from "./components/experience-item";
import {experiences, displayOrder} from '../content/experience';

class Index extends React.Component {

    render() {
        const experienceList = [];
        displayOrder.forEach(experienceName => {
            experienceList.push(<ExperienceItem info={experiences[experienceName]} key={experienceName} level={3}/>);
        });

        return (
            <SectionWrapper title="Portfolio" level={1} className="portfolio">
                <Header level={2}/>
                <SectionWrapper title="Experience" level={2} className="experience">
                    {experienceList}
                </SectionWrapper>
            </SectionWrapper>
        )
    }

}

ReactDOM.render(<Index />, document.getElementById('app'));
