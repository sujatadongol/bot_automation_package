import React from 'react';
import search from '../../assets/search.svg';
import './index.css';

function Search({ searchValue, onChange }) {
  return (
    <div className="d-flex global-search-wrapper">
      <img src={search} alt="search" className="search-icon" />
      <input
        value={searchValue}
        type="text"
        placeholder="Search"
        className="global-search-input"
        onChange={e => onChange(e)}
      />
    </div>
  );
}
export default Search;
