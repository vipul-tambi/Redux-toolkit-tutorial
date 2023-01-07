import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts, STATUS } from "../store/productSlice";

const Products = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();

    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  if (status === STATUS.LOADING) {
    return <h1>Loading...</h1>;
  }
  if (status === STATUS.ERROR) {
    return <h1>Something went wrong</h1>;
  }

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h4>{product.price}</h4>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
