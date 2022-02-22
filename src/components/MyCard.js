import React from "react";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../helper";
import "./MyCard.css";
const MyCard = ({ id, price, name, description, img }) => {
  return (
    <Link className="pcard" to={`/product/${id}`}>
      <div className="card">
        <div className="card-image">
          <img className="cimg" src={`${SERVER_URL + img}`} />
        </div>
        <div className="card-content">
          <span className="card-title">{name}</span>
          <p className="truncate">{description}</p>
          <h6 className="green-text"> ₹{price}</h6>
        </div>
      </div>
    </Link>
  );
};

export default MyCard;
