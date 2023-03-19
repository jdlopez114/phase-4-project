import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./Header";
import MainPage from "./MainPage";
import CarPage from "./CarPage";
import NavBar from "./NavBar";
import LoginScreen from "./LoginScreen";

function App() {

const [ currentUser, setCurrentUser ] = useState(null);
const [ carList, setCarList] = useState([])

useEffect(() => {
  fetch("/auth").then((res) => {
    if (res.ok) {
      res.json().then((user) => setCurrentUser(user));
    }
  });
}, []);

useEffect(() => {
  fetch(`/cars`)
  .then(r => r.json())
  .then(data => {
    setCarList(data)
  })
  .catch(error => (console.log( error )));
}, [])

// function handleLogout() {
//   setUser(null);
// }

if (!currentUser) return <LoginScreen setCurrentUser={ setCurrentUser } />;

  return (
    <div className="review-app">
      <Header/>
      <br />
      <NavBar/>
      <br />
      <Routes>
          <Route exact path="/" element={ <MainPage displayData={ carList } currentUser={ currentUser } /> } />
          <Route exact path="/cars/" element={ <MainPage displayData={ carList } currentUser={ currentUser } /> } />
          <Route exact path="/cars/:id" element={ <CarPage 
                                                carList={ carList } 
                                                setCarList={ setCarList }
                                              /> 
                                            }/>
      </Routes>
    </div>
  );
}

export default App;
