import React from 'react';
import PageCard from "./PageCard";

function MainPage({ carList }) {

  return (
    <div key={ carList.id }>
        { carList.map( car => {
            return <PageCard key={ car.id } car={ car }/>
        })}    
    </div>
  )
}

export default MainPage;