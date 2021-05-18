import React from 'react';
import "./Category.css"

function Category(props) {
  let className = "category ";
  className += props.type
  return (
    <button className={className} onClick={props.toSubcategories} color={props.color}>
      {props.type || "COMING SOON"}
    </button>
  )
}

export default Category;
