import React from "react";

function EditForm({ editCommentInput, setEditCommentInput, handleUpdateReview }) {

    const { comments } = editCommentInput

    function handleUpdateSubmit( e ){
        e.preventDefault()
        handleUpdateReview( editCommentInput )
        setEditCommentInput({
            "comments" : "",
            "car_id" : ""
        })
    }

    function handleChange( e ){
        setEditCommentInput({
            ...editCommentInput, 
            [ e.target.name ] : e.target.value
        })
    }
 
    return (
        <div className='review-form-section' >
            <form noValidate autoComplete="off" className='review-form' onSubmit={(e) => handleUpdateSubmit(e)}>
                <input
                    placeholder='Edit Review'
                    value={ comments }
                    onChange={ handleChange }
                    name='comments'
                    className='form-input'
                />
                <div >
                    <button 
                    className='form-buttons'
                    >
                    Update Review
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditForm;