import React from 'react';

import './cardHolder.style.css';

import Card from '../card/card.component';

const CardHolder = (props) => (
   <div className='card-holder'>
      <div className='container'>
         {
            props.info.map(country => <Card info={country} />)
         }
      </div>
   </div>
)

export default CardHolder;