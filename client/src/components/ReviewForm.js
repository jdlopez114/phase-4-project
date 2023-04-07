import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ReviewForm({ car, setCar, currentUser, setCarList, carList, carReviews, setCarReviews }) {

    console.log("ReviewForm - car", car)
    console.log("ReviewForm - currentUser", currentUser)


    const navigate = useNavigate();
    const [ error, setError ] = useState([])
    const [ commentInput, setCommentInput ] = useState ("")
    const newReview = { 
        comments : commentInput,
        car_id : car.id,
        user_id : currentUser.id
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
                r.json().then( data => setCarReviews([ ...carReviews, data ]))
                .then( () => navigate(`/cars/${ car.id }`) )
                setCommentInput("")
            } else {
                r.json().then((err) => setError( err.errors ))
            }
        })
    }    
      
    // function addReview( review ){
    //     const updatedSet = { ...car, reviews: [ review, ...car.reviews ] }
    //     // setCarList( carList.map( c => c.id === updatedSet.id ? updatedSet : c ))
    //     // setCar(updatedSet)
    //     console.log("updatedSet:", updatedSet)
    // }

    // function handleFormSubmit(e){
        
    //     setError([])
    //     handleAddReview( formData )
    //     setFormData({
    //         "comments" : "",
    //         "car_id" : "",
    //         "user_id" : ""
    //     })
    // }

    // function handleChange(e){
    //     setFormData({
    //         ...formData, 
    //         [ e.target.name ] : e.target.value
    //     })
    // }

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