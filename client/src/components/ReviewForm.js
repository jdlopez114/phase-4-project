import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ReviewForm({ car, currentUser, setCarList, carList }) {

    const navigate = useNavigate();

    const [ formData, setFormData ] = useState ({ 
        "comments" : "",
        "car_id" : car?.id,
        "user_id" : currentUser?.id
    })

    function handleAddReview( newReview ){
        fetch(`/reviews`, {
          method: "POST",
          headers: { 
            "Content-Type" : "application/json",
          }, 
            body: JSON.stringify( newReview )
        })
        .then( r => r.json())
        .then( data => addReview( data ))
        .then( () => navigate(`/cars/${ car.id }`) )
        .catch( error => (console.log( error )) )
    }    
      
    function addReview( review ){
        const updatedSet = { ...car, reviews: [ review, ...car.reviews ] }
        setCarList( carList.map( c => c.id === updatedSet.id ? updatedSet : c ))
    }

    function handleFormSubmit(e){
        e.preventDefault()
        handleAddReview( formData )
        setFormData({
            "comments" : "",
            "car_id" : "",
            "user_id" : ""
        })
    }

    function handleChange(e){
        setFormData({
            ...formData, 
            [ e.target.name ] : e.target.value
        })
    }

    return (
        <div className='review-form-section' >
            <form noValidate autoComplete="off" className='review-form' onSubmit={ handleFormSubmit } >
            <input
                placeholder='Add a review'
                value={ formData.comments }
                onChange={ handleChange }
                name='comments'
                className='review-form-input'
            />
            <div >
                <button 
                className='add-review-button'
                >
                Add Review
                </button>
            </div>
            </form>
        </div>
    );
}

export default ReviewForm;