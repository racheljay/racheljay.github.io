import React from 'react';

function Nav(props) {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="navbar-brand" >Rachel Jackson</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {props.pages.map((item, index) => {
              return (
                <li className="nav-item" key={index}>
                  <div
                  onClick={() => props.setPage(item)}
                  className={"nav-link " + (props.currentPage === item ? 'active' : "")}>
                    {item} <span className="sr-only">(current)</span></div>
                </li>
              )
            })}


            {/* <li className="nav-item">
              <div className="nav-link">Projects</div>
            </li>

            <li className="nav-item">
              <div className="nav-link">Links</div>
            </li> */}

          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav;