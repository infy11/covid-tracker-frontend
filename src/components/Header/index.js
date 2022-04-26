import React from 'react';
import './style.css';
import refreshIcon from '../../images/refresh-icon.svg';

function Header({getData}) {
    const handleOnClick = () => {
        getData();
    }
   return  <div className='header'>
       <div> Corona Tracker </div>
       <img src={refreshIcon} onClick={handleOnClick} className='refresh-button'/>
    </div>
}

export default Header;
