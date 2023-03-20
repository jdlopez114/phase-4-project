import React from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import ReviewRow from './ReviewRow';

function CarPage({ carList, currentUser, setCarList }) {         

    const { id } = useParams();
    const car = carList.find(c => c.id === parseInt(id));

    return(
        <div className='car-review-page'> 
            <div className='car-card' >
                <img className="car-img" src={ car?.img_url} alt="Not found."/>
                <h3> { car?.year } { car?.make } { car?.model }</h3>
                <h3>{ car?.color }</h3>
                <h3>{ car?.drive }</h3>
                <h3>{ car?.miles } miles </h3>
            </div>
            <div className='review-section' > 
            <ReviewForm car={ car } currentUser={ currentUser } carList={carList} setCarList={setCarList}/> 
                { car?.reviews.map(rev => { return <ReviewRow key={ rev.id } review={ rev }
                                // handleDeleteReview={ handleDeleteReview } 
                                // handleUpdateReview={ handleUpdateReview } 
                            />}) }
            </div>
        </div>
    )
}   
export default CarPage;