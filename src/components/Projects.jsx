import React, { useContext, useEffect, useState } from 'react';
import projects from '../data/projects.json';
import AppContext from '../utilities/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';




function Projects(props) {
  const { setCurrentPage, flipped, setFlipped } = useContext(AppContext);

  const [content, setContent] = useState(projects.projects)

  useEffect(() => {
    setCurrentPage('projects')
    if (!flipped) {
      setContent(content.reverse())
    }
    setFlipped(true)

  }, [content, flipped, setCurrentPage, setFlipped])
  return (
    <div className="container mt-5 pt-3">

      <div className="row mt-2 mb-2">
        <h1 className="col">
          Here's what I've been working on:
          </h1>
      </div>

      <div className="row">
        {content.map((item, index) => {
          return (
            <div className="col-md-4 mb-4" key={index}>

              <div className="card" >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img className="card-img-top" src={item.img} alt="project preview" />
                </a>
                <div className="card-body">
                  <div className="row">

                  <div className="col-9" href={item.link} target="_blank" rel="noopener noreferrer">
                    <a href={item.link} targe="_blank" rel="noopener noreferrer">
                    <h5 className="card-title">{item.name}</h5>
                    </a>
                    <p className="card-text">{item.desc}</p>
                  </div>

                  <div className="col-3">

                  <div id="github-logo" className="card-text pt-2"><a href={item.repo} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></div>
                  </div>


                  </div>


                </div>
              </div>

            </div>
          )
        })}
      </div>



    </div>
  )
}

export default Projects;