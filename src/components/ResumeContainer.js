import React from 'react';
import { withRouter } from 'react-router-dom';

const ResumeContainer = (props) => {
    let resume = require("../images/resume.png");

    return (
        <div className="resume">
            <img src={resume} className="resumeimage"/>
        </div>
    );
};

export default withRouter(ResumeContainer);