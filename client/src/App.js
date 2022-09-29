import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './App.css';

import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Search from './components/search';
import Card from './components/card'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">DTNS New Blog</h1>
          <div className="navBar">
            <Container>
              <Nav defaultActiveKey="/" variant="tabs" fill>
                <Nav.Item>
                  <Nav.Link href="/"> 
                    <Link to="/">Home</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item >
                  <Nav.Link eventKey={"aboutPage"}> 
                    <Link to="/about">About Us</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item >
                  <Nav.Link eventKey={"contactPage"}> 
                    <Link to="/contact">Contact</Link> 
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item >
                  <Nav.Link eventKey={"searchPage"}> 
                    <Link to="/search">Search</Link> 
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Container>
          </div>
        </header>
        <div className="display">
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/search" component={Search} />
        </div>
      </Router>

    </div>
  );
}

export default App;