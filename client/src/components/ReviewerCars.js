import React, { useEffect, useState } from "react";

function ReviewerCars({ currentUser }) {

    const [ reviewedCars, setReviewedCars] = useState([])

    useEffect(() => {
        fetch(`/users/${currentUser.id}`)
        .then(r => r.json())
        .then(data => {
            setReviewedCars( data.cars )
        })
        .catch(error => ( console.log( error )) );
      }, [currentUser.id]);
           
  return (
    <> 
    <h2 className="my-reviewed-cars"> MY REVIEWED CARS</h2>
    <br/>
    <br/>
    <div className='car-list'> 
            { reviewedCars.map( (car, index) => {
                return  <div  className='car-card2' key={index}>
                            <img className="car-image" src={ car.img_url } alt="Not found."/>
                            <h3>{ car.make } { car.model }</h3>
                </div>
            })}    
        </div>
    </>
    )
}

export default ReviewerCars;