import React from "react";
import { UserProvider } from './context/UserContext';
import { Routes, Route } from 'react-router-dom';
import MainPage from "./MainPage";
import CarPage from "./CarPage";
import CarForm from "./CarForm";
import LoginScreen from "./LoginScreen";
import ReviewerCars from "./ReviewerCars";
import NavBar from "./NavBar";

function App() {

  return (
    <div className="review-app">
      <UserProvider > 
        <NavBar />
        <Routes>
            <Route exact path="/" element={ <MainPage /> }/>
            <Route exact path="/login" element={ <LoginScreen /> }/>
            <Route exact path="/cars/" element={ <MainPage /> }/>
            <Route exact path="/cars/:id" element={ <CarPage /> }/>
            <Route exact path="/cars/new" element={ <CarForm /> }/>
            <Route exact path="/cars/mycars" element={ <ReviewerCars /> }/>
        </Routes>
      </UserProvider >
    </div>
  )
}

export default App;
