import React, { useContext } from "react";
import { UserContext } from './context/UserContext';
import { NavLink, useNavigate } from "react-router-dom";

function NavBar() { 

  const { currentUser, setCurrentUser } = useContext(UserContext)
  const navigate = useNavigate()

  function handleLogout(){
    fetch('/logout', {
        method: 'DELETE',
    }).then(() => {
        setCurrentUser(null)
    }).then(() => navigate(`/`))
  }

  return (
    <div> 
      { currentUser ? (
        <div className='navbar'>
          <ul> 
            <li><NavLink className="nav-links" exact="true" to="/cars/"> Home </NavLink></li>
            <li><NavLink className="nav-links" exact="true" to="/cars/new"> New </NavLink></li>
            <li><NavLink className="nav-links" exact="true" to="/cars/mycars">My Cars </NavLink></li>
            <li><NavLink className="nav-links" onClick={ handleLogout }>Logout </NavLink></li>
          </ul>
        </div>
      ) : (
          <h2 className="login-nav">TEST DRIVE LOGIN </h2>
      )}
    </div>
  )
}

export default NavBar;