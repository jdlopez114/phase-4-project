import React from 'react';

const ReviewRow = ({ review }) => {

    // const [ formDataEdit, setFormDataEdit ]  = useState({ 
    //     "user_name" : review.user_name,
    //     "comments" : review.comments,
    //   })
    
    // if (formDataEdit.id) {
    //   return <EditForm 
    //             formDataEdit={ formDataEdit } 
    //             handleUpdateReview={ handleUpdateReview } 
    //             setFormDataEdit={ setFormDataEdit }/>;
    // }
    
      return (
        <div className='car-card'key={ review.id}>
          <div className='review-container' key={ review.id }>
            <h3>{ review.reviewer.username} : </h3>
            <h3>{ review.comments }</h3>
      
          </div>
          <div className='icons'> 
            {/* <TiEdit
              onClick={() => setFormDataEdit({ id: review.id, value: review })}
              className='edit-icon'
            />
            <RiCloseCircleLine
              onClick={() => handleDeleteReview( review.id )}
              className='delete-icon'
            /> */}
          </div>
        </div>
      );
    };

export default ReviewRow;