import React from 'react';
import 'tachyons';

import './card.css';

const BusinessCard = (props) => {
  const business = props.businesses

  return(
    <div className='cardDiv'>
      <img className='cardImg' height="250" width="250" src={business.image_url} alt=''/>
      <div className='mainAttributes'>
        <div className='info fl w-60 pa2'>
          <h3>{business.name}</h3>
          <p className='businessInfo'>Price: {business.price} •
            {business.categories.map((e) =>{
              return "  " + e.title
            })}
          </p>
          <p className='businessInfo'>Rating: {business.rating} • {business.review_count}  Reviews</p>
        </div>
        <div className='address gl w-40 pa2'>
            <p>{business.location.city}</p>
            <p>{business.location.address1}</p>
            <p>{business.display_phone}</p>
        </div>
      </div>
    </div>
  )
}

export default BusinessCard;
