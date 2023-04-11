import React from "react";
import { Link } from 'react-router-dom';

function PageCard({ car }) {

  const { id, make, model, img_url } = car
  
  return (
    <Link to={ `/cars/${ id }` }>
      <div  className='car-card' >
        <img className="car-img" src={ img_url } alt="Not found."/>
        <h3>{ make } { model }</h3>
      </div>
    </Link>
  )
}

export default PageCard;