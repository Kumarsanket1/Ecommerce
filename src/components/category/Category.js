import "./Category.scss";
import React from 'react';
import {useNavigate} from 'react-router-dom'

const Category = ({category}) => {
  const navigate = useNavigate();

  return (
    <div 
         style={{backgroundImage: `url(${category.attributes.image?.data.attributes.url})`}}
         className="Category"
         onClick={() => navigate(`/category/${category.attributes.key}`)}>
        <div className="category-content center">
            <h3 className="heading">{category.attributes.title}</h3>
        </div>
    </div>
  )
}
export default Category
