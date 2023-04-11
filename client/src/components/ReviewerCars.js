import React, { useContext } from "react";
import { UserContext } from './context/UserContext';

function ReviewerCars() {

    const { currentUser, carList } = useContext(UserContext)

    function hasUserReview(car) {
        return car.reviews.some((review) => review.user_id === currentUser.id)
      }

    const userReviewedCars = carList.filter((car) => hasUserReview(car, currentUser.id));
           
    return (
        <> 
            <div> 
                <h2 className="page-headers"> MY REVIEWED CARS</h2>
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
        </>
    )
}

export default ReviewerCars;