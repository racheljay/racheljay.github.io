import React, { useContext, useEffect } from 'react';
import AppContext from '../utilities/AppContext';
import { useHistory } from 'react-router-dom';
import Typist from 'react-typist';

function LandingPage() {

    const { setCurrentPage } = useContext(AppContext);

    useEffect(() => {
        setCurrentPage('')
    }, [setCurrentPage])

    let history = useHistory();
    const handleClick = () => {
        history.push('/about')
    }
    return (
        <Typist>
            <div className="container-fluid" id="landing" onClick={handleClick} style={{cursor: "pointer"}}>

                <h1 className="display-2">Rachel Russell</h1>
                <h2 className="display-4">&lt; Software Engineer /&gt;</h2>

            </div>
        </Typist>
    )
}

export default LandingPage