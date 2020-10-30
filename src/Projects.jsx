import React from 'react';

function Projects(props) {
  return (
    <div className="container mt-5 pt-3">

      <div className="row mt-2 mb-2">
        <h1 className="col">
          Here's what I've been working on:
                </h1>
      </div>

      <div className="card-deck mb-4">


        <div className="card bg-light">
          <a href="https://racheljay.github.io/digital-clock/" target="_blank">
            <img className="card-img-top" src="./img/clock-screenshot600.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Digital Clock</h5>
              <p className="card-text"></p>
              <p className="card-text"><small className="text-muted">Prework: Week Four</small></p>
            </div>
          </a>
        </div>



        <div className="card">
          <a href="https://racheljay.github.io/countdown-timer/" target="_blank">
            <img className="card-img-top" src="img/countdown-screenshot600.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Countdown Timer</h5>
              <p className="card-text"></p>
              <p className="card-text"><small className="text-muted">Prework: Week Four</small></p>
            </div>
          </a>
        </div>



        <div className="card bg-light">
          <a href="https://racheljay.github.io/campaign-components/" target="_blank">
            <img className="card-img-top" src="img/campaign-screenshot600.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Campaign Components</h5>
              <p className="card-text"></p>
              <p className="card-text"><small className="text-muted">Frontend: Week 1</small></p>
            </div>
          </a>
        </div>




      </div>

      {/* <!--Row 2--> */}

      <div className="card-deck">


        <div className="card">
          <a href="https://racheljay.github.io/mind-reader/" target="_blank">
            <img className="card-img-top" src="img/mindreader600.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Mind Reader</h5>
              <p className="card-text"></p>
              <p className="card-text"><small className="text-muted">Frontend: Week 1</small></p>
            </div>
          </a>
        </div>



        <div className="card bg-light">
          <a href="https://racheljay.github.io/async-weather-app/" target="_blank">
            <img className="card-img-top" src="img/weather600.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Weather App</h5>
              <p className="card-text"></p>
              <p className="card-text"><small className="text-muted">Frontend: Week 2</small></p>
            </div>
          </a>
        </div>



        <div className="card ">
          <a href="https://racheljay.github.io/tic-tac-toe" target="_blank">
            <img className="card-img-top" src="img/tictac600.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Tic-Tac-Toe</h5>
              <p className="card-text"></p>
              <p className="card-text"><small className="text-muted">Frontend: Week 3</small></p>
            </div>
          </a>
        </div>




      </div>

    </div>
  )
}

export default Projects;