import React, { useContext } from "react";
import { UserContext } from './context/UserContext';
import { NavLink, useNavigate } from "react-router-dom";

function Header() { 

  const { currentUser, setCurrentUser } = useContext(UserContext)
  const navigate = useNavigate()
  

  function handleLogout(){
    fetch('/logout', {
        method: 'DELETE',
    }).then(() => {
        setCurrentUser(null)
    }).then(() => navigate(`/`))
  }

  const NavBar = <div className='navbar'>
                    {/* <h1><strong>Welcome { currentUser.username }</strong></h1> */}
                      <ul> 
                        <li><NavLink className="nav-links" exact="true" to="/cars/"> Home </NavLink></li>
                        <li><NavLink className="nav-links" exact="true" to="/cars/new"> New </NavLink></li>
                        <li><NavLink className="nav-links" exact="true" to="/cars/mycars">My Cars </NavLink></li>
                        <li><NavLink className="nav-links" onClick={ handleLogout }>Logout </NavLink></li>
                      </ul>
                  </div>

  return (
    <div> 
      <header className="header-container">
          <div>{ NavBar }</div>
      </header>
    </div>
  )
}

export default Header;