import React, {useContext, useEffect} from 'react';
import AppContext from '../utilities/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';


function Links(props) {

  const { setCurrentPage} = useContext(AppContext);

	useEffect(() => {
		setCurrentPage('links')
  },[setCurrentPage])
  
    return (
        <div className="container-fluid" id="landing">
          <h1 className="display-4">Follow me:</h1>
        
        <br/>
        <h4 className="row text-center d-flex justify-content-center">
        <p className="col-12"><a href="https://github.com/racheljay" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}  /> Github </a>
          <a href="https://www.codewars.com/users/racheljay" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCode}  /> Codewars </a>
          <a href="https://www.instagram.com/racheljaymakes/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}  /> Instagram </a>
          <a href="https://www.linkedin.com/in/racheljay42/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}  /> LinkedIn</a>
        </p>
      </h4>
    
      </div>
    )
}

export default Links;