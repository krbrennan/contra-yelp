import React from 'react';
import 'tachyons';

import './card.css';

const BusinessCard = (props) => {
  const first = props.businesses[0]
  console.log(props.businesses[0])
  return(
    <div className='cardDiv'>
      <img className='cardImg' height="250" src={first.image_url} alt='ohNoes!'/>
    <div className='mainAttributes'>
      <div className='info'>
        <h5>{first.name}</h5>
        <p className='businessInfo'>Price: {first.price} •
          {first.categories.map((e) =>{
            return "  " + e.title
          })}
        </p>
        <p className='businessInfo'>Rating: {first.rating}</p>
      </div>
      <div className='address'>
          <p>{first.location.city}</p>
          <p>{first.location.address1}</p>
          <p>{first.display_phone}</p>
      </div>
    </div>
    </div>
  )
}

export default BusinessCard;
