import React from 'react';
import PageCard from "./PageCard";

function MainPage({ displayData, currentUser, setCurrentUser }) {

  console.log("display data:", displayData, "current user:", currentUser)

  return (

    <div className='car-list'>
        { displayData.map( car => {
            return <PageCard key={ car.id } displayData={ car }/>
        })}    
    </div>
  )
}

export default MainPage;