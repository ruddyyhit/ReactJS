import React, {Component } from 'react';
import PROJECTS from './data/project';

class  Projects extends Component {
    render (){
        return(
        <div>
            <h1>Highlighted projects</h1>
            <div>
                <div>{PROJECTS[0].title}</div>
                <div>{PROJECTS[1].title}</div>
                <div>{PROJECTS[2].title}</div>
            </div>
        </div>
        )
    }
}
export default Projects;