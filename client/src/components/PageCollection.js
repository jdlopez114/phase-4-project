import React from 'react';
import PageCard from "./PageCard";

function PageCollection({ displayData }) {

  return (
    <div className='car-list'>
        { displayData.map( car => {
            return <PageCard key={ car.id } displayData={ car }/>
        })}    
    </div>
  )
}

export default PageCollection;