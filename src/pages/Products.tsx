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
  const handleToggleStock = async (productId: number) => {
    await DB.toggleProductInStock(productId); // Call the updated function
    const updatedProducts = await DB.getAllProducts(); // Refresh products from DB
    setProducts(updatedProducts); // Update state
  };

  return (
    <div className="products-page">
      <SearchFilter />
      <div className="product-grid">
        {products.map((product) => {
          const isSalad = product.ingredients.length > 0;

          return (
            
            <div
              key={product.id}
              className={`product-card ${product.in_stock ? "in-stock" : "out-of-stock"
                } ${isSalad ? "salad-card" : ""}`}
            >
            <div className="titleAndIoExtensionPuzzle ">  
              <h1>{product.title}</h1>
              {isSalad && (<IoExtensionPuzzle size={25} fill="g"/>)}
              </div>
              <button onClick={() => handleToggleStock(product.id)}>
                {product.in_stock ? "In Stock" : "Out of Stock"}
              </button>
              {isSalad && (
                <div className="salad-ingredients">
                  {/* <IoExtensionPuzzle size={25} /> */}
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
    </div>
  );
};

export default Products;
