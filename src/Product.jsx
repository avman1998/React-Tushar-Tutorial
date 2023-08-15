const Product = (prop) => {
  return (
    <div>
      <img src={prop.image} alt={prop.title} width="200px" height="200px" />
      <p>{prop.title}</p>
      <button>Add to cart</button>
    </div>
  );
};
export default Product;
