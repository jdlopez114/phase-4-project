import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CarForm({ carList, setCarList }) {

  const navigate = useNavigate();
  const [ error, setError ] = useState([])
  const [ formData, setFormData ] = useState ({
    "make" : "",
    "model" : "",
    "year" : "",
    "img_url" : "" 
  })

  function handleAddCar( newCar ){
    fetch(`/cars`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        'Accept': 'application/json'
      }, 
        body: JSON.stringify( newCar )
    })
    .then( r => {
      if ( r.ok ){
        r.json().then( data => addCar( data ))
        .then(() => navigate(`/cars/`))
      } else {
        r.json().then(( err ) => setError( err.errors.join() ))
      }
    })
  }

  function addCar( car ){
    const updatedSet = { ...carList, car }
    setCarList( carList.map(c => c.id === updatedSet.id ? updatedSet : c ))
  }

  function handleFormSubmit( e ){
    e.preventDefault()
    setError([])
    handleAddCar( formData )
    setFormData({
      "make" : "",
      "model" : "",
      "year" : "",
      "img_url" : ""    
    })
  }

  function handleChange(e){
    setFormData({
        ...formData, 
        [ e.target.name ] : e.target.value
    })
  }
    
  return (
    <div className='car-form-section' >
      <form noValidate autoComplete="off" className='review-form' onSubmit={ handleFormSubmit } >
        <input
            className='form-input'
            placeholder='Make'
            autoComplete="off"
            value={ formData.make }
            onChange={ handleChange }
            name='make'
        />
          <input
            className='form-input'
            placeholder='Model'
            value={ formData.model }
            onChange={ handleChange }
            name='model'
        />
          <input
            className='form-input'
            placeholder='Year'
            value={ formData.year }
            onChange={ handleChange }
            name='year'
        />
          <input
            className='form-input'
            placeholder='Image Url'
            value={ formData.img_url }
            onChange={ handleChange }
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

export default CarForm