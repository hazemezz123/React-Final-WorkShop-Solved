import { useProduct } from "../context/ProductContext";
const ProductsList = () => {
  const { products } = useProduct();
  return (
    <div className="container mt-2 d-flex  flex-column">
      <h1 className="text-center my-4">Products List </h1>
      {products.map((product) => {
        return (
          <div key={product.id} className="border p-2 mb-5">
            <h4>Product Number: {product.id}</h4>
            <hr />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <strong>$ Price: {product.price}</strong>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
