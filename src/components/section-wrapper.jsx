import React from 'react';

export default class SectionWrapper extends React.Component {

    render() {
        const classes = `element level-${this.props.level} ${this.props.className || null}`;
        return (
            <section className={classes}>
                <span className="element-open">{this.props.title}</span>
                {this.props.children}
                <span className="element-close">{this.props.title}</span>
            </section>
        )
    }
}