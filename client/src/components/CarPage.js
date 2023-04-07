import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import ReviewRow from './ReviewRow';

function CarPage({ currentUser, setCurrentUser }) {     

  const { id } = useParams();
  const [ car, setCar ] = useState([])
  const [ carReviews, setCarReviews] = useState([])

  useEffect(() => {
    fetch(`/cars/${ id }`)
    .then(r => r.json())
    .then(data => {
      setCar( data )
      setCarReviews( data.reviews )
    })
  },[ id ])
  
  // console.log("CarPage - car:", car)
  // console.log("CarPage - carReviews:", carReviews)

    function handleDeleteReview( id ){
        fetch(`/reviews/user_reviews/${ currentUser.id }`, {
          method: "DELETE",
          headers: { 
            "Content-Type" : "application/json"
          }
        })
        .then(() => removeReview( id ))
        .catch(error => ( console.log( error )) )
      }
      
      function removeReview( id ) {
        const updatedCarReviews = { ...currentUser, reviews: [ ...(currentUser.reviews.filter( rev => rev.id !== id )) ]}
        setCurrentUser( currentUser.reviews.map( c => c.id === updatedCarReviews.id ? updatedCarReviews : c ))
      }
    
      function handleUpdateReview( editedReview ){
        fetch(`/reviews/user_reviews/${ editedReview.id }`, {
          method: "PATCH",
          headers:{
            "Content-Type" : "application/json"
          },
          body: JSON.stringify( editedReview )
        })
        .then( r => r.json() )
        .then ( data => updateReview( data ))
        .catch( error => (console.log( error )))
      }
    
      function updateReview( editedRev ){
        const updatedCarObject = { ...currentUser, reviews: [ editedRev, ...currentUser.reviews.filter( rev => rev.id !== editedRev.id ) ]}
        setCar( car.map( c => c.id === updatedCarObject.id ? updatedCarObject : c ))
      }

    return(
        <div className='car-review-page'> 
            <div className='single-car-card' >
                <img className="car-img" src={ car.img_url} alt="Not found."/>
                <h3> { car.year } { car.make } { car.model }</h3>
                <h3>{ car.color }</h3>
                <h3>{ car.drive }</h3>
            </div>
            <div className='review-section' > 
            <ReviewForm currentUser={ currentUser } car={ car } setCar={ setCar } carReviews={carReviews} setCarReviews={setCarReviews}/> 
                { carReviews.map(rev => { return <ReviewRow key={ rev.id } review={ rev }
                                handleDeleteReview={ handleDeleteReview } 
                                handleUpdateReview={ handleUpdateReview } 
                                currentUser={ currentUser }
                            />}) }
            </div>
        </div>
    )
}   

export default CarPage;