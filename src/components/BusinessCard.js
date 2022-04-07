import React from 'react';
import 'tachyons';

import '../Css/card.css';

const BusinessCard = (props) => {
  const business = props.businesses

  return(
    <div className='card-div row'>

      <div className='card-img-container col-sm-12 col-md-12 col-lg-4'>
        <img className='card-img' src={business.image_url} alt='restaraunt image'/>
      </div>

    <div className='business-info-container d-flex row col-sm-12 col-md-12 col-lg-8'>

      <div className='main-attributes col-sm-12 col-md-12 col-lg-8'>
        <div className='info fl ps-4 w-100 h-100 pa2'>
          <h3>{business.name}</h3>
          <p className='business-info'>Rating: {business.rating} / 5</p>
          <p className='business-price'>Price: {business.price}
          </p>
          <p className='type-of-food'>
            {business.categories.map((e) =>{
              return "  " + e.title
            })}
          </p>
          <p>{business.review_count}  Reviews</p>
        </div>
      </div>

      <div className='address-container col-sm-12 col-md-12 col-lg-4'>
        <div className='address gl ps-4 w-100 h-100 pa2'>
            <p>{business.location.city}</p>
            <p>{business.location.address1}</p>
            <p>{business.display_phone}</p>
        </div>
      </div>

    </div>
    </div>
  )
}

export default BusinessCard;
