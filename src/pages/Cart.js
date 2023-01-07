import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    return dispatch(remove(productId));
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartwrapper">
        {products.map((product) => (
          <div className="cartCard">
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
