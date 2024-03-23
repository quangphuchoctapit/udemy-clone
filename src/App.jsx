import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './screens/Home';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='*' element={<div>404 not found</div>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
