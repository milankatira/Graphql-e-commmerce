import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_PRODUCT } from "../graphql/queries";
import Carousel from "@brainhubeu/react-carousel";
import { SERVER_URL } from "../helper";
import { useCart } from "react-use-cart";
import { CircularProgress } from '@mui/material';


const Product = () => {
  const { pid } = useParams();
  const { addItem } = useCart();
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: {
      productId: pid,
    },
  });
  if (loading) return  <div className="loader"><CircularProgress/></div>;;
  if (error) return error;
  if (data) console.log(data);

  const { name, price, description, images } = data.product.data.attributes;
  const addToCart = () => {
    addItem({
      id: pid,
      name,
      price,
      img: SERVER_URL + images.data[0].attributes.url,
    });
  };
  return (
    <div className="container">
      <Carousel plugins={["arrows"]}>
        {images.data.map(({ attributes }) => {
          return (
            <img style={{ height: "50vh" }} src={SERVER_URL + attributes.url} />
          );
        })}
      </Carousel>

      <div>
        <h2>{name}</h2>

        <h5 className="green-text" style={{ fontWeight: "bold" }}>
          {" "}
          ₹{price}
        </h5>

        <p>{description}</p>
        <button className="btn blue" onClick={addToCart}>
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default Product;
