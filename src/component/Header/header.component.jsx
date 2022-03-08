import React from 'react';

import './header.style.css';

const Header = (props) => (
   <header>
      <nav>
         <div>
            <h1><span>~~ </span>{props.title}<span> ~~</span></h1>
         </div>
      </nav>
   </header>
)

export default Header;