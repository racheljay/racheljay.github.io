import React, { useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faHtml5, faCss3Alt, faJs, faReact, faPhp, faLaravel } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import AppContext from '../utilities/AppContext';


function About() {
	const { currentPage, setCurrentPage } = useContext(AppContext);

	useEffect(() => {
		console.log('about page')
		setCurrentPage('about')
	}, [])

	return (
		<div id="about">

			<div className="container mt-5">

				<h1 className="pt-4 mb-4 display-3 d-flex justify-content-center">Hi, I'm Rachel</h1>

				<div className="row">

					<div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
						<div className="text-align-center">

							<img src="img/Rachel_Jackson.jpg" id="bio-pic" alt="" />

							<p className="text-center">
								<FontAwesomeIcon icon={faHtml5} />
								<FontAwesomeIcon icon={faCss3Alt} />
								<FontAwesomeIcon icon={faBootstrap} />
								<FontAwesomeIcon icon={faJs} />
								<FontAwesomeIcon icon={faReact} />
								<FontAwesomeIcon icon={faPhp} />
								<FontAwesomeIcon icon={faLaravel} />
								<FontAwesomeIcon icon={faDatabase} />

							</p>
						</div>




					</div>
					<div className="col-lg-8 col-md-6 p-2 d-flex align-items-center">

						<p>Welcome to my portfolio! Please take a look around and check out some of my projects! I am a Junior Full-Stack Developer and recent bootcamp graduate. One of the reasons that I decided to become a developer is because I love that magic feeling of creating something from nothing. That’s why, when I’m not writing code, you will probably find me knitting, sewing, and making my own clothes. It is so satisfying to put hard work and effort into a project and get something wonderful at the end that leaves you thinking, “Wow! Did <i>I</i> make that?”</p>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
					</div>
				</div>


			</div>


			{/* <div className=" card text-center">

				<div className="card-body bg-dark text-light">
					<h5 className="card-title">Current Tech Stack:</h5>
					<p className="card-text">
						<FontAwesomeIcon icon={faHtml5} />
						<FontAwesomeIcon icon={faCss3Alt} />
						<FontAwesomeIcon icon={faBootstrap} />
						<FontAwesomeIcon icon={faJs} />
						<FontAwesomeIcon icon={faReact} />
						<FontAwesomeIcon icon={faPhp} />
						<FontAwesomeIcon icon={faLaravel} />
						<FontAwesomeIcon icon={faDatabase} />

					</p>

				</div>

			</div> */}

		</div>
	)
}

export default About