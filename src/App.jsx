import React from 'react';
import './App.css';
import './index.css';
import Nav from './Nav';
import Blog from './Blog';
import Projects from './Projects';
import Links from './Links';

// import ReactDOM from 'react-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faCheckSquare, faCoffee)


//yo fam we could turn this into a class and render different
//pages based on state, wouldn't that be lit???
class App extends React.Component {

  constructor() {
    super();
    this.pages = ["Home", "Projects", "Links"];
    this.state = {
      currentPage: "Home",
    }
    this.setPage = this.setPage.bind(this);
  }

  setPage(newPageNum) {
    this.setState({ currentPage: newPageNum})
    console.log(this.state.currentPage)
  }

  render() {
    let content = "";
  return (
    
    
    <div className="App">
    <Nav
      pages={this.pages}
      currentPage={this.state.currentPage}
      setPage={this.setPage}
    />
    <br/>
    <br/>
      {this.pages.map((item, index) => {
        if(this.state.currentPage === "Home") {
          content =  <Blog />
        }else if(this.state.currentPage === "Projects") {
          content = <Projects />
        } else if (this.state.currentPage === "Links") {
          content = <Links />
        }
      })}
    {content}

      
    </div>
    
  );
  }
}

export default App;
