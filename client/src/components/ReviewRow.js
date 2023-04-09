import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import EditForm from './EditForm';

const ReviewRow = ({ currentUser, review, handleDeleteReview, handleUpdateReview }) => {

  const [ editCommentInput, setEditCommentInput ]  = useState({ 
    "comments" : review.comments,
    "car_id" : review.car_id
  })

  if ( editCommentInput.id ) {
    return <EditForm 
              handleUpdateReview={ handleUpdateReview } 
              editCommentInput={ editCommentInput } 
              setEditCommentInput={ setEditCommentInput }/>
  }

  return (
      <div className='car-review'key={ review.id }>
        { currentUser.username === review.username ? 
                ( <div className='icons'> 
                    <TiEdit className='edit-icon' onClick={ () => setEditCommentInput( { id: review.id, value: review })}/>
                    <RiCloseCircleLine className='delete-icon' onClick={ () => handleDeleteReview( review.id )}/>
                  </div>
                ) : null }
        <div className='review-container' key={ review.id }>
          <h3 className="reviewer-name" > { review.username } : </h3>
          <h3 className="reviewer-comments" >{ review.comments }</h3>
        </div>
    </div>
  );
};

export default ReviewRow;