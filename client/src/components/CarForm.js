import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CarForm({ setCarList }) {

  const navigate = useNavigate()
  const [ error, setError ] = useState([])

  const [ makeInput, setMakeInput ] = useState ("")
  const [ modelInput, setModelInput ] = useState ("")
  const [ yearInput, setYearInput ] = useState ("")
  const [ img_urlInput, setImg_urlInput ] = useState ("")

  const newCar = {
    make : makeInput,
    model : modelInput,
    year : yearInput,
    img_url : img_urlInput
  }

  function handleSubmit( e ){
    e.preventDefault()
    setError([])
    fetch(`/cars`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        'Accept': 'application/json'
      }, 
        body: JSON.stringify( newCar )
    }).then( r => {
      if ( r.ok ){
        r.json().then( data => addCar( data ))
        .then(() => {
          navigate(`/cars/`)
          setMakeInput("")
          setModelInput("")
          setYearInput("")
          setImg_urlInput("")
        })
      } else {
        r.json().then(( err ) => setError( err.errors.join() ))
      }
    })
  }
   
  function addCar( car ){
    setCarList( prevList => [...prevList, car] )
  }

  return (
    <div className='car-form-section' >
      <form noValidate autoComplete="off" className='review-form' onSubmit={ handleSubmit }>
        <input
            className='form-input'
            placeholder='Make'
            autoComplete="off"
            value={ makeInput }
            onChange={ (e) => setMakeInput(e.target.value) }
            name='make'
        />
          <input
            className='form-input'
            placeholder='Model'
            value={ modelInput }
            onChange={ (e) => setModelInput(e.target.value) }
            name='model'
        />
          <input
            className='form-input'
            placeholder='Year'
            value={ yearInput }
            onChange={ (e) => setYearInput(e.target.value) }
            name='year'
        />
          <input
            className='form-input'
            placeholder='Image Url'
            value={ img_urlInput }
            onChange={ (e) => setImg_urlInput(e.target.value) }
            name='img_url'
        />
        <div >
            <button 
            className="form-buttons"
            >
            Add Car
            </button>
        </div>
        <div>
          { error ? <div className="errors-container"><span className="error-message">{ error }</span></div> : null }                
        </div>
      </form>
    </div>
  )
}

export default CarForm;