import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactPlayer from 'react-player'

const ProjectContainer = (props) => {
    return (
        <div className="project">
            <div className="medinfo4u">
                <h1>MedInfo4U</h1>
                <p>An app for patients/nurses/doctors to help make hospital visits simpler and more efficient. All 3 users are able to log in to their respective portals to see previous/current appointments and informatino regarding the appointments. It is built with a React frontend and Rails backend.</p>
                <ReactPlayer 
                className="video"
                    url="https://www.youtube.com/watch?v=rHxxhbs2McI&feature=youtu.be"
                />
                <div className="repos">
                    <a href="https://github.com/joshtkim/mod5_project_frontend">
                        <h3>Frontend Repo</h3>
                    </a>
                    <a href="https://github.com/joshtkim/medinfo4u_backend">
                        <h3>Backend Repo</h3>
                    </a>
                </div>
            </div>
            <div className="budgettracker">
                <h1>BudgetTracker</h1>
                <p>A budgeting app that allows users to keep track of their spendings in an effective manner. It is built with React frontend and Rails backend.</p>
                <ReactPlayer 
                className="video"
                    url="https://www.youtube.com/watch?v=cR-fYGFDf70&feature=youtu.be"
                />
                <div className="repos">
                    <a href="https://github.com/joshtkim/mod4_frontend/tree/master/src">
                        <h3>Frontend Repo</h3>
                    </a>
                    <a href="https://github.com/sofiatofigh0/mod5proj-backend">
                        <h3>Backend Repo</h3>
                    </a>
                </div>
            </div>
            <div className="xchangegame">
                <h1>XChange Game</h1>
                <p>A fun game that allows the player to see different exchange rates from around the world. The player will see an item, the usd value and a country's currency they have to guess the price in.</p>
                <ReactPlayer 
                    className="video"
                    url="https://www.youtube.com/watch?v=c_wJNqHeDSY&feature=youtu.be"
                />
                <div className="repos">
                    <a href="https://github.com/carolineglass/xchange-game-frontend">
                        <h3>Frontend Repo</h3>
                    </a>
                    <a href="https://github.com/carolineglass/xchange-game-backend">
                        <h3>Backend Repo</h3>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default withRouter(ProjectContainer);