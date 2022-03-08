import React from 'react';

import './search-box.style.css'


export const SearchBox = ({ placeholder, handleChange }) => (
   <div className='input-dailog'>
      <input className='search-input' type='input' placeholder={placeholder} onChange={handleChange} />
   </div>
)