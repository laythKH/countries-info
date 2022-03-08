import React from 'react';

import './card.style.css'

const Card = (props) => (
   <div className='card' key={props.info.id}>
      <img src={props.info.img} className='image' alt={props.info.name} />
      <div className='content'>
         <h1 className='title'>{props.info.name}</h1>
         <ul>
            <li>Capital: <span>{props.info.capital}</span></li>
            <li>population: <span>{props.info.population}</span></li>
         </ul>
      </div>
   </div>
)

export default Card;