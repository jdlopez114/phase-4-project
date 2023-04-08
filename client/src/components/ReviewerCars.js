import React from "react";

function ReviewerCars({ currentUser }) {

    const { cars } = currentUser
    
    const uniqueCars = cars.filter(
        (obj, index, self) =>
          index === self.findIndex((t) => t.make === obj.make && t.model === obj.model)
      );
           
  return (
        <> 
            <h2 className="my-reviewed-cars"> MY REVIEWED CARS</h2>
            <br/>
            <br/>
            <div className='car-list'> 
                    { uniqueCars.map(( car, index ) => {
                        return  <div  className='car-card2' key={ index }>
                                    <img className="car-image" src={ car.img_url } alt="Not found."/>
                                    <h3>{ car.make } { car.model }</h3>
                        </div>
                    })}    
            </div>
        </>
    )
}

export default ReviewerCars;