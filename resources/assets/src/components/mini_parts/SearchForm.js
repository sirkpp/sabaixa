import React from 'react';

const SearchForm=(props)=>(
  <form onSubmit={props.getItem}>
    <select className="search-box select-k" >
      <option value="all">All</option>
      <option value="product">Product</option>
      <option value="producer">Producer</option>
      <option value="wholesaler">WholeSaler</option>
    </select>
    <input className="search-box search-k" type="text" name="productName"/>
    <button className="search-box button-k">Search</button>
  </form>
);




export default SearchForm;