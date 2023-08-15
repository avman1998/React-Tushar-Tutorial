import { products } from "./config";
import Product from "./Product";
const MyPage = () => {
  console.log(products);
  const listedProducts = products.map((item, index) => {
    return <Product key={index} image={item.image} title={item.title} />;
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">{listedProducts}</div>
      <h1>Cart: 0</h1>
    </div>
  );
};
export default MyPage;
