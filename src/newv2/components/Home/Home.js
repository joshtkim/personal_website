import React from 'react';
import data from '../../info/data'

import './home.scss'

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="main-info">
        <h1>Hello!</h1>
        <h1>My name is Joshua Kim</h1>
        <h1>& welcome to my page!</h1>
        <div className="divider"></div>
        <h1>I am a fullstack developer!</h1>
        <div className="contact-link">
        {Object.keys(data.socials).map((x) => (
          <div>
            <a href={data.socials[x].link}>
              <img src={data.socials[x].icon} alt={data.socials[x].text} className="logoimage"/>
            </a>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Home
