import React from 'react';
import { withRouter } from 'react-router-dom';

const AboutMeContainer = (props) => {

    let linkedinlogo = require("../images/linkedin.png");
    let mediumlogo = require("../images/medium.jpg");
    let githublogo = require("../images/github.png");

    return (
        <div className="aboutmecontainer">
            <div className="aboutme">
                <h1>About Me</h1>
                <h5>Quick and eager web developer with full stack experience using Ruby, Ruby on Rails, Javascript, React, and SQL. I can adapt easily to new situations and stay focused on the goal which will be a strong addition to any team. Ready to engage with your organization to problem solve and leverage my skills and knowledge to continue to grow.</h5>
                <h5>I attended Flatiron School to gain the skills needed to pursue a new career as a software engineer.</h5>
                <h5>In my free time I enjoy spending time doing activities such as playing basketball, flag football, hiking, grilling, and computer games. </h5>
                <h5>To find out more - 
                    <a href="mailto:jykim92@gmail.com">
                        email me!
                    </a>
                </h5>
            </div>
            <div className="links">
                <a href="https://linkedin.com/in/joshua-kim29/">
                    <img src={linkedinlogo} className="logoimage"/>
                </a>
                <a href="https://github.com/joshtkim">
                    <img src={githublogo} className="logoimage"/>
                </a>
                <a href="https://medium.com/@josh.y.kim">
                    <img src={mediumlogo} className="logoimage"/>
                </a>
            </div>
        </div>
    );
};

export default withRouter(AboutMeContainer);