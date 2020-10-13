import React from 'react'
import './SearchBox.css'

const SearchBox = ({searchChange})=>{
    return(
        <div className='search'>
        <input className='search-box' type='search' placeholder='Search flowers & plants' onChange={searchChange}/>
        </div>
    )
}

export default SearchBox;