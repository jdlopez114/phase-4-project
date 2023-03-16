import React from 'react';

const ReviewRow = ({ review }) => {

  return (
    <div className='car-review'key={ review.id}>
      <div className='review-container' key={ review.id }>
        <h3>{ review.reviewer.username} : </h3>
        <h3>{ review.comments }</h3>
      </div>
    </div>
  );
};

export default ReviewRow;