import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";

function Detail() {
  let { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/" + id)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  return (
    <div className="productCardDetail">
      <ul className="card">
        <img src={detail.image} />
        <div className="about">
          <li>{detail.name}</li>
          <li>{detail.category}</li>
          <li>{detail.price}</li>
        </div>
      </ul>
    </div>
  );
}

export default Detail;
