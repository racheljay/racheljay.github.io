import React, { useContext, useEffect } from 'react';
import AppContext from '../utilities/AppContext';
import { Link, useHistory } from 'react-router-dom';
import Typist from 'react-typist';

function LandingPage() {

    const { currentPage, setCurrentPage } = useContext(AppContext);

    useEffect(() => {
        setCurrentPage('')
    }, [])

    let history = useHistory();
    const handleClick = () => {
        history.push('/about')
    }
    return (
        <Typist>
            <div className="container-fluid" id="landing" onClick={handleClick}>


                <h1 className="display-2">Rachel Jackson</h1>
                <h2 className="display-4">&lt; Web Developer /&gt;</h2>

            </div>
        </Typist>
    )
}

export default LandingPage