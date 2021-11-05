import React from 'react'
import './Stylev2.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./newv2/components/Navbar";
import Home from "./newv2/components/Home/Home";
import About from "./newv2/components/About/About";
import Project from "./newv2/components/Project/Project";

const NewAppv2 = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="body">
        <Home />
        <About />
        <Project />
      </div>
    </div>
  )
}

export default NewAppv2
