import React from 'react';
import projects from './data/projects.json';

function Projects(props) {
  console.log(projects.projects)
  return (
    <div className="container mt-5 pt-3">

      <div className="row mt-2 mb-2">
        <h1 className="col">
          Here's what I've been working on:
          </h1>
      </div>

      <div className="row">
        {projects.projects.map((item, index) => {
          return (
            <div className="col-md-4 mb-4" key={index}>
              <a href={item.link} target="_blank">

                <div className="card" >
                  <img className="card-img-top" src={item.img} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.week}</p>
                  </div>
                </div>
              </a>

            </div>
          )
        })}
      </div>

      

    </div>
  )
}

export default Projects;