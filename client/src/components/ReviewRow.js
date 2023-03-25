import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import EditForm from './EditForm';

const ReviewRow = ({ review, handleDeleteReview, handleUpdateReview, currentUser }) => {

  const [ formDataEdit, setFormDataEdit ]  = useState({ 
    "comments" : review.comments,
    "car_id" : review.car_id,
    "user_id" : review.user_id
  })

  if ( formDataEdit.id ) {
    return <EditForm 
              formDataEdit={ formDataEdit } 
              handleUpdateReview={ handleUpdateReview } 
              setFormDataEdit={ setFormDataEdit }/>;
  }

  return (
      <div className='car-review'key={ review.id }>
        <div className='review-container' key={ review.id }>
          <h3>{ review.username } : </h3>
          <h3>{ review.comments }</h3>
        </div>
        { currentUser.username === review.username ? 
          ( <div className='icons'> 
              <TiEdit className='edit-icon' onClick={ () => setFormDataEdit( { id: review.id, value: review })}/>
              <RiCloseCircleLine className='delete-icon' onClick={ () => handleDeleteReview( review.id )}/>
            </div>
          ) : null }
    </div>
  );
};

export default ReviewRow;