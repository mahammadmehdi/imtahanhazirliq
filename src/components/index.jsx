import React, { useContext, useEffect, useState } from "react";
import "./index.scss"
import { NavLink } from "react-router-dom";
import { SearchContext } from "../context/Searchcontext";

function Productcard() {
  const [product, setProduct] = useState([]);
  const {search} = useContext(SearchContext)

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="cards"><div className="productCard">
    {product
    .filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
    .map((x) => (
      <ul className="productCards" key={x._id}>
        <img className="img" src={x.image} />
       <div className="about"> <li>{x.name}</li>
        <li>{x.category}</li>
        <li>{x.price}</li></div>
        <NavLink to={"/detail/"+x._id}>Go to Detail</NavLink>
        
      </ul>
    ))}
  </div></div>
  );
}

export default Productcard;
