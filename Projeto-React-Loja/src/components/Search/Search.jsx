import React from 'react';
import './index.scss';
import { FaSearch,FaUser } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';

const Search = () => {
    return (
        <div className='search'>
            <div className='search__bar'>
                <FaSearch size={25} />
                <input type="text" placeholder='Search'/>
            </div>
            <FaUser size={30}/>
            <CiStar size={40}/>
        </div>
    );
}

export default Search;
