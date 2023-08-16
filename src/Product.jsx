const Product = (prop) => {
  console.log("This is my setCart function ", prop.setCart);
  function addtoCart(item) {
    prop.setCart((prev) => {
      return [...prev, item];
    });
  }

  return (
    <div>
      <img
        src={prop.item.image}
        alt={prop.item.title}
        width="200px"
        height="200px"
      />
      <p>{prop.item.title}</p>
      <button onClick={() => addtoCart(prop.item)}>Add to cart</button>
    </div>
  );
};
export default Product;
