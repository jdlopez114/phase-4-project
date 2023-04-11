import React, { useContext } from "react";
import { UserContext } from './context/UserContext';
import PageCard from "./PageCard";
import Header from "./Header";

function MainPage() {

  const { carList} = useContext(UserContext)

  return (
    <> 
    <Header/>
      <div key={ carList.id }>
          { carList.map( car => {
              return <PageCard key={ car.id } car={ car }/>
          })}    
      </div>
    </>
  )
}

export default MainPage;