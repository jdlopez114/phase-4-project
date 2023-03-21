import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";

function NavBar({ setCurrentUser }) {

  const navigate = useNavigate();

  const selected = {
    color: '#fff',
    background: '#4169E1',
    borderRadius: '22px',
    padding: '10px'
  }

  const notSelected ={ 
    color: '#fff',
    background: '#4169E1',
    borderRadius: '22px',
    padding: '10px'
  }

  function handleLogout(){
    fetch('/logout', {
        method: 'DELETE',
    }).then(() => {
        setCurrentUser(null)
    }).then(() => navigate(`/`))
  }

  const NavBar = 
    <div className='navbar'>
      <NavLink exact="true" to="/cars/" style={({ isActive }) => isActive ? selected : notSelected }> Home Page </NavLink>
      <button onClick={ handleLogout } className="logout-button" style={ selected }>Logout</button>
    </div>

  return (
    <div>{ NavBar }</div>
  )
}

export default NavBar;