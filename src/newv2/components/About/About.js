import React from 'react'
import './about.scss'

const About = () => {
	return (
		<div className='about' id='about'>
			<div className='about-info'>
				<div className="about">
					<h1>About Me</h1>
					<p>Quick and eager web developer with full stack experience using Ruby, Ruby on Rails, Javascript, React, Python, Django and SQL.</p>
					<p>I can adapt easily to new situations and stay focused on the goal which will be a strong addition to any team.</p>
					<p>Ready to engage with your organization to problem solve and leverage my skills and knowledge to continue to grow.</p>
					<p>I attended Flatiron School to gain the skills needed to pursue a new career as a software engineer.</p>
					<p>I want to use my new skills in this new field to make a positive impact on people's lives.</p>
					<p>I want to make technology more accessible for everyone to benefit from it.</p>
				</div>
				<div className="hobbies">
					<h1>Hobbies</h1>
					<p>In my free time I enjoy spending time doing activities such as playing basketball, flag football, hiking, grilling, and computer games.</p>
				</div>
			</div>
		</div>
	)
}

export default About
