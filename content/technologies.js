import React from 'react';
import NodeLogoSVG from 'svg-react-loader?name=Icon!./svg/node.svg';
import ReactLogoSVG from 'svg-react-loader?name=Icon!./svg/react.svg';
import ReduxLogoSVG from 'svg-react-loader?name=Icon!./svg/redux.svg';

export default {
    node: {
        displayName: 'Node.js',
        briefDescription: 'A JavaScript runtime environment for executing code server-side',
        website: 'https://nodejs.org/en/',
        svg: <NodeLogoSVG/>,
        description: {

        }
    },
    redux: {
        displayName: 'Redux',
        briefDescription: 'A predictable state container for JavaScript apps',
        website: 'http://redux.js.org/',
        svg: <ReduxLogoSVG/>,
    },
    react: {
        displayName: 'React',
        briefDescription: 'A JavaScript library developed for creating user interfaces',
        website: 'https://facebook.github.io/react/',
        svg: <ReactLogoSVG/>,
    }
}

