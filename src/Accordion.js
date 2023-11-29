import React, { useState } from 'react'
import './App.css'
function Accordion({title, description}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(isDropdownOpen => !isDropdownOpen)
  };

  return (
    <div className='accordion'>
      <div className='accordion-header' onClick={toggleDropdown}>
        <div className='accordion-title'>{title}</div>
        <p className='accordion-icon'>{isDropdownOpen ? '⮙' : '⮛'}</p>
      </div>
      {isDropdownOpen && (
        <div className='accordion-body'>
          {description}
        </div>
      )}
    </div>
  );
}

export default Accordion;