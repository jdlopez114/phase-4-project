import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./Header";
import MainPage from "./MainPage";
import CarPage from "./CarPage";
import NavBar from "./NavBar";

function App() {

const [ carList, setCarList] = useState([])

useEffect(() => {
  fetch(`http://127.0.0.1:9393/cars`)
  .then(r => r.json())
  .then(data => {
    setCarList(data)
  })
  .catch(error => (console.log( error )));
}, [])


  return (
    <div className="review-app">
      <Header/>
      <br />
      <NavBar/>
      <br />
      <Routes>
          <Route exact path="/" element={ <MainPage displayData={ carList }/> } />
          <Route exact path="/cars/" element={ <MainPage displayData={ carList }/> } />
          {/* <Route exact path="/cars/:id" element={ <CarPage 
                                                carList={ carList } 
                                                setCarList={ setCarList }
                                              /> 
                                            }/> */}
      </Routes>
    </div>
  );
}

export default App;
