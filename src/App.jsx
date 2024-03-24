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
import Profile from './screens/Profile';
import Test from './screens/Test';
import NotFoundPage from './screens/404NotFound';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/test' element={<Test />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
