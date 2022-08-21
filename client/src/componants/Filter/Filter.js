import React from "react";
import "./Filter.css";
function Filter(props) {
  return (
    <div className="filterElem">
      <h2 className="filter-title">Fliter</h2>
      <div className="num-of-products">Number of products:4</div>
      <div className="filter-by-size">
        <span>Filter</span>
        <select className="filter-select">
          <option value="ALL">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className="filter-by-size">
        <span>Order</span>
        <select className="filter-select">
          <option value="latest">Latest</option>
          <option value="Lower">Lower</option>
          <option value="Highest">Highest</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
