import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';


function Nav(props) {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-info fixed-top">
        <Link to="/" className="navbar-brand" ><FontAwesomeIcon icon={faCode} /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <div
                className={"nav-link "}>About<span className="sr-only">(current)</span></div>
            </li>

            <li className="nav-item">
              <Link to="/projects"
                className={"nav-link "}>Projects<span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item">
              <Link to="/links"
                className={"nav-link "}>Links<span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Blogs
        </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="postwork-blog" className="dropdown-item" href="#">Post Work Blog</Link>
                <div className="dropdown-divider"></div>
                <Link to="bootcamp-blog" className="dropdown-item" href="#">Bootcamp Blog</Link>
                
              </div>
            </li>


          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav;