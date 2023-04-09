import React  from "react";

function ReviewerCars({ currentUser, carList }) {

    console.log("ReviewerCars-> carList:", carList)

    // const { cars } = currentUser
    // const uniqueCars = cars.filter(
    //     (obj, index, self) => index === self.findIndex((t) => t.make === obj.make && t.model === obj.model));

    function hasUserReview(car, id) {
        return car.reviews.some((review) => review.user_id === currentUser.id);
      }

    const userReviewedCars = carList.filter((car) => hasUserReview(car, currentUser.id));

    console.log("userReviewedCars:", userReviewedCars)
           
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