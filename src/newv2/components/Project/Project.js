import React from 'react'
import projectList from '../../info/project'
import './project.scss'

const Project = () => {
  return (
    <div className="project" id='project'>
		<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-indicators">
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
			</div>
			<h1>Projects</h1>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<div className="card">
						<div className="card-body">
						<h5 className="card-title">MedInfo4U</h5>
						<p className="card-text">An app for patients/nurses/doctors are able to log in to their respective portals to see previous/current appts and info regarding their visits. It is built with a React frontend and Rails backend.</p>
						<div className="video-responsive">
							<iframe
							width="560" 
							height="315"
							src={`https://www.youtube.com/embed/rHxxhbs2McI`}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="Embedded youtube"
							/>
						</div>
						<a href="https://github.com/joshtkim/mod4_frontend/tree/master/src" className="card-link">Front End</a>
						<a href="https://github.com/joshtkim/medinfo4u_backend" className="card-link">Back End</a>
						</div>
					</div>
				</div>
				<div className="carousel-item">
					<div className="card">
						<div className="card-body">
						<h5 className="card-title">BudgetTracker</h5>
						<p className="card-text">A budgeting app that allows users to keep track of their spendings in an effective manner. It is built with React frontend and Rails backend.</p>
						<div className="video-responsive">
							<iframe
							width="560" 
							height="315"
							src={`https://www.youtube.com/embed/cR-fYGFDf70`}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="Embedded youtube"
							/>
						</div>
						<a href='https://github.com/joshtkim/mod4_frontend/tree/master/src' className="card-link">Front End</a>
						<a href='https://github.com/sofiatofigh0/mod5proj-backend' className="card-link">Back End</a>
						</div>
					</div>
				</div>
				<div className="carousel-item">
					<div className="card">
						<div className="card-body">
						<h5 className="card-title">XChange Game</h5>
						<p className="card-text">A fun game that allows the player to see different exchange rates from around the world. The player will see an item, the usd value and a country's currency they have to guess the price in.</p>
						<div className="video-responsive">
							<iframe
							width="560" 
							height="315"
							src={`https://www.youtube.com/embed/c_wJNqHeDSY`}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="Embedded youtube"
							/>
						</div>
						<a href='https://github.com/carolineglass/xchange-game-frontend' className="card-link">Front End</a>
						<a href='https://github.com/carolineglass/xchange-game-backend' className="card-link">Back End</a>
						</div>
					</div>
				</div>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
    </div>
  )
}

export default Project
