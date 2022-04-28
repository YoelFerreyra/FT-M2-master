import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='d-flex bg-dark text-white'>
        <div className='d-flex flex-start'>
        <img src={Logo} alt="logo" />
        <p>Henrry-Weather App</p>
        </div>
        <div className='d-flex flex-end'>
        <SearchBar onSearch={onSearch}></SearchBar>
        </div>
    </div>
    
  );
};

export default Nav;
