import React from 'react';
import OWLLogoSVG from 'svg-react-loader?name=Icon!./svg/owl.svg';

export const experiences = {
    'modkit': {
        type: 'position',
        title: 'Modkit Inc',
        role: 'Software Development Intern',
        location: 'Cambridge, MA',
        period: 'Jul 2017 - Present',
        website: 'http://www.modkit.com/',
        linkDescription: 'Visit modkit.com',
        description:
            'Assisted in development of next-generation programming environment for VEX Robotics enthusiasts,'
        ,
        technologies: [
            'node'
        ],
        current: true,
    },
    'olin-library': {
        type: 'position',
        title: 'Olin College of Engineering Library',
        role: 'Software Development Intern',
        location: 'Needham, MA',
        period: 'Jul 2017 - Aug 2017',
        website: 'http://www.rewritethelibrary.org/summer17/index.html',
        linkDescription: 'Visit the Olin Workshop on the Library website',
        logo: <OWLLogoSVG/>,
        description:
            'Assisted in development of next-generation programming environment for VEX Robotics enthusiasts,'
        ,
        technologies: [
            'react',
            'redux'
        ],
        current: false,
    }
};

export const displayOrder = [
    'modkit',
    'olin-library',
];