import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import AppContext from '../utilities/AppContext';



function Nav(props) {

  const { currentPage } = useContext(AppContext);

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
              <Link to="/about"
                className={"nav-link " + (currentPage === 'about' ? "active" : "")}>About<span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item">
              <Link to="/projects"
                className={"nav-link " + (currentPage === 'projects' ? "active" : "")}
              >Projects<span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item">
              <Link to="/links"
                className={"nav-link " + (currentPage === 'links' ? "active" : "")}>Links<span className="sr-only">(current)</span></Link>
            </li>

            {/* <li className={"nav-item dropdown " + (currentPage === 'blogs' ? "active" : "")}>
              <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Blogs
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="postwork-blog" className="dropdown-item" href="#">Post Work Blog</Link>
                <div className="dropdown-divider"></div>
                <Link to="bootcamp-blog" className="dropdown-item" href="#">Bootcamp Blog</Link>

              </div>
            </li> */}

          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav;