import React from 'react';
import PageCard from "./PageCard";

function MainPage({ displayData }) {

  return (

    <div key={ displayData.id }>
        { displayData.map( car => {
            return <PageCard key={ car.id } displayData={ car }/>
        })}    
    </div>
  )
}

export default MainPage;