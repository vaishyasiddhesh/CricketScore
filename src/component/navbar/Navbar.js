import React, { useState } from 'react';
import './Navbar.css'
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Pointtable from './Pages/Pointtable';
import News from './Pages/News';
import MatchDetails from './Pages/MatchDetails';

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen]=useState(false)
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <Router>
    <nav className='navbar'>
        <div className='nav-logo'>CricketScore</div>
        <div className='menu' onClick={toggleMenu}>
            
            <div className='menu-icon' ></div>
            <div className='menu-icon'></div>
            <div className='menu-icon'></div>

        </div>
        <ul className={isMenuOpen ? 'navbar-links active' : 'navbar-links'}>

            <li>
                <NavLink to='/' onClick={toggleMenu}>Matches</NavLink>
            </li>
            <li>
                <NavLink to='/point-table' onClick={toggleMenu}>Point Table</NavLink>
            </li>
            <li>
                <NavLink to='news' onClick={toggleMenu}>News</NavLink>
            </li>
        </ul>
    </nav>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/point-table' element={<Pointtable/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path="/match/:matchId" element={<MatchDetails />} /> 
    </Routes>
    </Router>
  )
}

export default Navbar
