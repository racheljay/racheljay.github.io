import React from 'react';

function Nav(props) {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a class="navbar-brand" href="index.html"><i class="fas fa-laptop-code"></i> Rachel's Code Blog</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="projects.html">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="links.html">Links</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav;