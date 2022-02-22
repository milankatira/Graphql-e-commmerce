import React, { useState } from "react";
import { useCart } from "react-use-cart";
import Checkout from "../components/Checkout";
const Card = () => {
  const { isEmpty, items, cartTotal, removeItem } = useCart();
  const [checkout, setCheckout] = useState(false);
  if (isEmpty) return <h1>your cart is empty</h1>;

  if (items) console.log(items);

  const jwt = localStorage.getItem("jwt");
  if (checkout) {
    return <div className="container">
      <h4>Payment page</h4>
<Checkout/>
      <button  className="btn red" onClick={()=>setCheckout(false)}>Cancel</button>
    </div>;
  }
  return (
    <div>
      <div className="container row">
        <ul class="collection col m8">
          {items.map((item) => {
            return (
              <li class="collection-item avatar">
                <img src={item.img} alt="" class="circle" />
                <span class="title truncate">{item.name}</span>
                <p>
                  {" "}
                  ₹{item.price}×{item.quantity}=₹{item.itemTotal}{" "}
                </p>
                <a href="#!" class="secondary-content">
                  <i
                    class="secondary-content material-icons red-text"
                    onClick={() => removeItem(item.id)}
                  >
                    remove_circle
                  </i>
                </a>
              </li>
            );
          })}
        </ul>

        <div
          className="col m3 offset-m1"
          style={{ position: "sticky", top: "2px" }}
        >
          <h3>Total price</h3>
          <h4>{cartTotal}</h4>
          {jwt ? (
            <button className="btn blur" onClick={() => setCheckout(true)}>
              checkout
            </button>
          ) : (
            <div className="card-panel red white-text">
              Please Login to checkout
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
