import React from 'react';

const ReviewRow = ({ model }) => {

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
        <div className='review-row'key={ model.id}>
          <div className='review-container' key={ model.id }>
            <h3>{ model}</h3>
            <h4>{ model }</h4>
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