import { useState } from "react";
import { products } from "./config";
import Product from "./Product";
const MyPage = () => {
  const [cart, setCart] = useState([]);
  const listedProducts = products.map((item, index) => {
    return <Product key={index} item={item} setCart={setCart} />;
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">{listedProducts}</div>
      <h1>Cart: {cart.length}</h1>
    </div>
  );
};
export default MyPage;
