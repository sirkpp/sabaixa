import React from 'react';

const SearchForm=(props)=>(
  <form style={{display:"flex", alignItems:"center",flexWrap:"wrap",justifyContent:"center"}} onSubmit={props.getItem}>
    <select className="search-box select-k" >
      <option value="all">All</option>
      <option value="product">Product</option>
      <option value="producer">Producer</option>
      <option value="wholesaler">WholeSaler</option>
    </select>
    <input style={{minWidth:"200px"}} className="search-box search-k" type="text" name="productName"/>
    <button className="search-box button-k">Search</button>
  </form>
);




export default SearchForm;