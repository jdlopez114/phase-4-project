import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function ReviewForm({ car, carList, setCarList, currentUser, setCurrentUser }) {

    const navigate = useNavigate()
    const [ error, setError ] = useState([])
    const [ commentInput, setCommentInput ] = useState ("")
    const newReview = { 
        comments : commentInput,
        car_id : car.id
    }

    function handleSubmit( e ){
        e.preventDefault()
        setError([])
        fetch(`/reviews`, {
          method: "POST",
          headers: { 
            "Content-Type" : "application/json"
          }, 
            body: JSON.stringify( newReview )
        }).then( r => { 
            if ( r.ok ) {
                r.json().then( data => addReview( data ))
                .then(() => {
                    navigate(`/cars/${ car.id }`)
                    setCommentInput("")
                })
            } else {
                r.json().then((err) => setError( err.errors ))
            }
        })
    }    

    function addReview( review ){
        const updatedCar = { ...car, reviews: [ review, ...car.reviews ] }
        const updatedCars = currentUser.cars.map( c => c.id === updatedCar.id ? updatedCar : c )
        const updatedUser = { ...currentUser, cars: updatedCars }
        setCurrentUser(updatedUser);
        setCarList( carList.map( c => c.id === updatedCar.id ? updatedCar : c ))
    }

    return (
        <div className='review-form-section' >
            <form noValidate autoComplete="off" className='review-form' onSubmit={ (e) => handleSubmit(e) }>
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
    )
}

export default ReviewForm;