import React, { Fragment } from 'react';
import './public/css/main.scss'

//My Components
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Skills from './components/Skills'
import Projects from './components/Projects'

//Material UI
import { Container } from '@material-ui/core'

const App = () => {
    return (
        <Fragment>
            <Welcome />
            <Skills />
            <Projects />
        </Fragment>
    );
}

export default App;