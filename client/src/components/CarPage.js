import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReviewRow from './ReviewRow';


function CarPage({ carList, setCarList} ) {         

    const { id } = useParams();
    const navigate = useNavigate();
    const car = carList.find(c => c.id === parseInt(id));

    console.log(car)

    return(
        <> 
            <div  className='car-card' >
                <img className="car-img" src={ car?.img_url} alt="Not found."/>
                <h3> { car?.year } { car?.make } { car?.model }</h3>
                <h3>{ car?.color }</h3>
                <h3>{ car?.drive }</h3>
                <h3>{ car?.miles } miles </h3>
            </div>
                { car?.reviews.map(rev => { return <ReviewRow key={ rev.id } review={ rev } 
                                // handleDeleteReview={ handleDeleteReview } 
                                // handleUpdateReview={ handleUpdateReview } 
                            />}) }
        </>
    )
}   
export default CarPage;