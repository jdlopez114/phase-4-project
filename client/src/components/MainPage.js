import React, { useContext } from "react";
import { UserContext } from './context/UserContext';
import PageCard from "./PageCard";
import LoginScreen from "./LoginScreen";

function MainPage() {

  const { currentUser, carList } = useContext(UserContext)

  if ( !currentUser || currentUser.error ) return <LoginScreen />

  return (
    <> 
      <h1 className="page-headers"><strong>Welcome { currentUser.username }</strong></h1>
      <div key={ carList.id }>
          { carList.map( car => {
              return <PageCard key={ car.id } car={ car }/>
          })}    
      </div>
    </>
  )
}

export default MainPage;