import React  from "react";

function ReviewerCars({ currentUser, carList }) {

    function hasUserReview(car) {
        return car.reviews.some((review) => review.user_id === currentUser.id)
      }

    const userReviewedCars = carList.filter((car) => hasUserReview(car, currentUser.id));
           
  return (
        <div> 
            <h2 className="my-reviewed-cars"> MY REVIEWED CARS</h2>
            <br/>
            <br/>
            <div className='car-list'> 
                    { userReviewedCars.map(( car, index ) => {
                        return  <div  className='car-card2' key={ index }>
                                    <img className="car-image" src={ car.img_url } alt="Not found."/>
                                    <h3>{ car.make } { car.model }</h3>
                        </div>
                    })}    
            </div>
        </div>
    )
}

export default ReviewerCars;