import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Style.css';

import Header from './old/headers/Header';

import AboutMeContainer from './old/components/AboutMeContainer';
import Resume from './old/components/ResumeContainer';
import Projects from './old/components/ProjectsContainer';

const App = () => {
  // Initialize history
  const history = useHistory();

    // Render AboutMe Page
    const renderAboutMe = () => {
      return (
        <AboutMeContainer />
      );
    };

    // Render Resume Page
    const renderResume = () => {
      return (
        <Resume />
      );
    };

  // Render Projects Page
  const renderProjects = () => {
    return (
      <Projects />
    );
  };

  // RETURN
  return (
    <div className="maincontainer">
      <div className="title">
        <Header 
          history={history}
        />
      </div>
      
      <Switch>
        <Route exact path="/" render={() => renderAboutMe() } />
        <Route exact path="/resume" render={() => renderResume() } />
        <Route exact path="/projects" render={() => renderProjects() } />
      </Switch>
    </div>
  );
};

let RouterComponent = withRouter(App);
export default RouterComponent; 