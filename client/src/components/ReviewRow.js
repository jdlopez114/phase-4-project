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
        <h3>{ review.user.username } : </h3>
        <h3>{ review.comments }</h3>
      </div>

      { currentUser.username === review.user.username ? ( 
      <div className='icons'> 
      <TiEdit
        onClick={ () => setFormDataEdit( { id: review.id, value: review } ) }
        className='edit-icon'
      />
      <RiCloseCircleLine
        onClick={ () => handleDeleteReview( review.id ) }
        className='delete-icon'
      />
    </div>
      ) : null }

    </div>
  );
};

export default ReviewRow;