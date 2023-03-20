import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

const ReviewRow = ({ review, handleDeleteReview  }) => {

  return (
    <div className='car-review'key={ review.id}>
      <div className='review-container' key={ review.id }>
        <h3>{ review.user.username} : </h3>
        <h3>{ review.comments }</h3>
      </div>
      <div className='icons'> 
        {/* <TiEdit
          onClick={() => setFormDataEdit({ id: review.id, value: review })}
          className='edit-icon'
        /> */}
        <RiCloseCircleLine
          onClick={() => handleDeleteReview( review.id )}
          className='delete-icon'
        />
      </div>
    </div>
    
  );
};

export default ReviewRow;