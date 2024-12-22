import { useEffect, useState } from "react";
import { DB, Product } from "../data-providers/Server";
import { IoExtensionPuzzle } from "react-icons/io5";
import SearchFilter from "../components/SearchFilter";
import "./product.css";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    DB.getAllProducts().then((products) => {
      setProducts(products);
      setIsLoading(false);
    });
  }, []);

  const productMap = products.reduce((map, product) => {
    map[product.id] = product.title;
    return map;
  }, {} as Record<number, string>);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="products-page">
      <SearchFilter />
      {products.map((product) => {
        const isSalad = product.ingredients.length > 0;

        return (
          <div
            key={product.id}
            className={`product-card ${isSalad ? "salad-card" : ""}`}
          >
            <h1>{product.title}</h1>
            {isSalad && (
              <div className="salad-ingredients">
                <IoExtensionPuzzle size={25} />
                <div className="tooltip">
                  {product.ingredients.map((ingredient, idx) => (
                    <p key={idx}>
                      {ingredient.quantity} x {productMap[ingredient.product_id]}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
