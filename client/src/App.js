import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './App.css';

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Search from './components/Search';
import Card from './components/Card'
import NavBar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;