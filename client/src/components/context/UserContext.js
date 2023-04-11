import React, { useState, useEffect } from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {

  const [ currentUser, setCurrentUser ] = useState(null)
  const [ carList, setCarList] = useState([])
 
  useEffect(() => {
    fetch("/auth").then( r  => {
      if ( r.ok ) {
        r.json().then( user => {
          setCurrentUser( user )
        })
      }
    });
    fetch(`/cars`)
    .then( r => r.json())
    .then( data => {
      setCarList( data )
    })
    .catch(error => ( console.log( error )) );
  }, []);


  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, carList, setCarList }}>
      { children }
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };