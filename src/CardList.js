import React from 'react';
import BusinessCard from './BusinessCard';

import 'tachyons';

const CardList = (props) => {
console.log(props);
  return(
    <div>
      {
        props.businesses.map((card, i) =>{
          return <BusinessCard businesses={card} key={card.id} />
        })
      }
    </div>
  )
}

export default CardList;
