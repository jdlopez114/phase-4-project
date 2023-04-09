import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ReviewForm({ car, carList, setCarList, currentUser, setCurrentUser }) {

    console.log("ReviewForm-> currentUser:", currentUser)

    const navigate = useNavigate();
    const [ error, setError ] = useState([])
    const [ commentInput, setCommentInput ] = useState ("")
    const newReview = { 
        comments : commentInput,
        car_id : car.id
    }

    function handleSubmit( e ){
        e.preventDefault()
        fetch(`/reviews`, {
          method: "POST",
          headers: { 
            "Content-Type" : "application/json",
            'Accept': 'application/json'
          }, 
            body: JSON.stringify( newReview )
        }).then( r => { 
            if ( r.ok ) {
                r.json().then( data => addReview(data))
                .then(() => {
                    navigate(`/cars/${ car.id }`)
                })
            } else {
                r.json().then((err) => setError( err.errors ))
            }
        })
    }    

    function addReview( review ){
        
        // const updatedCar = { ...car, reviews: [ review, ...car.reviews ] }
        // setCarList( carList.map( c => c.id === updatedCar.id ? updatedCar : c ))
        // const udpdatedUserCar = { 
        //     ...currentUser, 
        //     cars: 
        //     [ {...car, 
        //         reviews: 
        //         [ review, ...car.reviews ]}
        //     ]
        // }
        // setCarList( carList.map( c => c.id === udpdatedUserCar.id ? udpdatedUserCar : c ))
        // setCarList( carList.map( c => c.id === updatedCar.id ? updatedCar : c ))
        // setCarList(prevCarList => {
        //     const updatedCarList = prevCarList.map(c => {
        //       if (c.id === updatedCar.id) {
        //         // Check if the updated car belongs to the current user
        //         if (c.user_id === currentUser.id) {
        //           return updatedCar;
        //         } else {
        //           return c;
        //         }
        //       } else {
        //         return c;
        //       }
        //     });
        //     return updatedCarList;
        //   });
        // const isCarInUserCars = currentUser.cars.some(car => car.id === updatedCar.id);
        // if (isCarInUserCars) {
        // // if updated car is already in the cars array, do not update the state
        //     return;
        // } else {
        // // otherwise update the state by replacing the original car with updated car object
        //     setCarList(prevCarList => prevCarList.map( c => c.id === updatedCar.id ? updatedCar : c ));
        // }

        const updatedCar = { ...car, reviews: [ review, ...car.reviews ] };
        const updatedCars = currentUser.cars.map(c => c.id === updatedCar.id ? updatedCar : c);
        const updatedUser = { ...currentUser, cars: updatedCars };
      
      
        setCurrentUser(updatedUser);
        setCarList(carList.map(c => c.id === updatedCar.id ? updatedCar : c));
    }


    return (
        <div className='review-form-section' >
            <form noValidate autoComplete="off" className='review-form' onSubmit={ handleSubmit } >
                <input
                    placeholder='Add a review'
                    value={ commentInput }
                    onChange={(e) => setCommentInput(e.target.value)}
                    name='comments'
                    className='form-input'
                />
                <div >
                    <button 
                    className="form-buttons"
                    >
                    Add Review
                    </button>
                </div>
                <div>
                { error ? <div className="errors-container"><span className="error-message">{ error }</span></div> : null }                
                </div>
            </form>
        </div>
    );
}

export default ReviewForm;