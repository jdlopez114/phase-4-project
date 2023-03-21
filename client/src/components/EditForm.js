import React from 'react';

function EditForm({ formDataEdit, setFormDataEdit, handleUpdateReview }) {

    function handleUpdateSubmit( e ){
        e.preventDefault()
        handleUpdateReview( formDataEdit )
        setFormDataEdit({
            "comments" : "",
            "car_id" : "",
            "user_id" : ""
        })
    }

    function handleChange( e ){
        setFormDataEdit({
            ...formDataEdit, 
            [ e.target.name ] : e.target.value
        })
    }
 
    return (
        <div className='review-form-section' >
            <form noValidate autoComplete="off" className='review-form' onSubmit={ ( e ) => handleUpdateSubmit ( e ) }>
                <input
                    placeholder='Edit Review'
                    value={ formDataEdit.comments }
                    onChange={ handleChange }
                    name='comments'
                    className='review-form-input'
                />
                <div >
                    <button 
                    className='add-review-button'
                    >
                    Update Review
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditForm;