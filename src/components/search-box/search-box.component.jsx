import React from 'react';
import '../search-box/search-box.styles.css'

// Div name .search

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
    className='search' 
    type="search" 
    placeholder={placeholder} 
    onChange={handleChange}
          />
)