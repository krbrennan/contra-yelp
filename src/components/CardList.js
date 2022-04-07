import React from 'react';
import BusinessCard from './BusinessCard';

import '../Css/card-list.css'

import 'tachyons';

const CardList = (props) => {
  return(
    <div className='card-list'>
      {
        props.businesses.map((card, i) =>{
          return <BusinessCard businesses={card} key={card.id} />
        })
      }
    </div>
  )
}

export default CardList;
