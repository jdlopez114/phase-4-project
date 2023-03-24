import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./Header";
import MainPage from "./MainPage";
import CarPage from "./CarPage";
import NavBar from "./NavBar";
import LoginScreen from "./LoginScreen";
import ReviewerCars from "./ReviewerCars";

function App() {

  const [ currentUser, setCurrentUser ] = useState(null);
  const [ carList, setCarList] = useState([])

  useEffect(() => {
    fetch("/auth").then( r  => {
      if ( r.ok ) {
        r.json().then( user => setCurrentUser( user ))
      }
    });
    fetch(`/cars`)
    .then(r => r.json())
    .then(data => {
      setCarList( data )
    })
    .catch(error => ( console.log( error )) );
  }, []);

  if ( !currentUser ) return <LoginScreen setCurrentUser={ setCurrentUser } />;

  return (
    <div className="review-app">
      <Header currentUser={ currentUser }/>
      <br />
      <NavBar setCurrentUser={ setCurrentUser }/>
      <br />
      <Routes>
          <Route exact path="/" element={ <MainPage displayData={ carList }/> }/>
          <Route exact path="/cars/mycars" element={ <ReviewerCars currentUser={ currentUser }/> }/>
          <Route exact path="/cars/" element={ <MainPage displayData={ carList } currentUser={ currentUser }/> }/>
          <Route exact path="/cars/:id" element={ <CarPage 
                                                carList={ carList } 
                                                setCarList={ setCarList }
                                                currentUser={ currentUser }
                                              /> 
                                            }/>
      </Routes>
    </div>
  );
}

export default App;
