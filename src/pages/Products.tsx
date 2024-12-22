import { useEffect, useState } from "react";
import { DB, Product } from "../data-providers/Server";
import { IoExtensionPuzzle } from "react-icons/io5";
import SearchFilter from "../components/SearchFilter";
// import { useLocation } from "react-router-dom"; // Import useLocation

import "./product.css";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  // const location = useLocation(); // Detect route changes
  const fetchProducts = async () => {
    setIsLoading(true);
    const products = await DB.loadProductsFromSessionStorage();
    setProducts(products);
    setIsLoading(false);
    console.log()
  }

  useEffect(() => {
    fetchProducts(); // Fetch products on mount or route change
  }, []); // Refetch whenever the route changes
  const handlePageChange = (direction: string) => {
    if (direction === "next" && currentPage < Math.ceil(products.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
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
 console.log("productsssssss",products)
  

  return (
    <div className="products-page">
      <SearchFilter />
      <div className="product-grid">
        {paginatedProducts.map((product) => {
          const isSalad = product.ingredients.length > 0;

          return (
            
            <div
              key={product.id}
              className={`product-card ${product.in_stock ? "in-stock" : "out-of-stock"
                } ${isSalad ? "salad-card" : ""}`}
            >
            <div className="titleAndIoExtensionPuzzle ">  
              <h1>{product.title}</h1>
              {isSalad && (<IoExtensionPuzzle size={25} fill="green"/>)}
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
      <div className="pagination-controls">
        <button onClick={() => handlePageChange("prev")} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => handlePageChange("next")}
          disabled={currentPage === Math.ceil(products.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
