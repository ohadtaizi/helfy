// Import mock data
import { products } from "../mock-data/products"; // Keep original products for reset
import { questions } from "../mock-data/questions";

// Manage UNIQUE_ID in sessionStorage
const getUniqueId = (): number => {
  const storedId = sessionStorage.getItem("UNIQUE_ID");
  const currentId = storedId ? parseInt(storedId, 10) : 31; // Default to 31 if not present
  const newId = currentId + 1;
  sessionStorage.setItem("UNIQUE_ID", newId.toString());
  return currentId;
};

// Load and save products from/to sessionStorage
const loadProductsFromSessionStorage = async (): Promise<Product[]> => {
  const sessionStorageProductsString = sessionStorage.getItem("products");
  if (!sessionStorageProductsString) {
    const fetchedProducts = await getAllProducts();
    saveProductsToSessionStorage(fetchedProducts);
    return fetchedProducts;
  }
  return JSON.parse(sessionStorageProductsString);
};

const saveProductsToSessionStorage = (products: Product[]): void => {
  sessionStorage.setItem("products", JSON.stringify(products));
};

// Deep copy helper
const getDeepCopy = (obj: any) => JSON.parse(JSON.stringify(obj));

// Interface definitions
export interface Ingredient {
  product_id: number;
  quantity: number;
}

export interface Product {
  id: number;
  title: string;
  in_stock: boolean;
  ingredients: Ingredient[];
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

// Mocked functions
const getAllProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getDeepCopy(products));
    }, 1000);
  });
};

const getProductById = async (id: number): Promise<Product | undefined> => {
  const product = products.find((product) => product.id === id);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getDeepCopy(product));
    }, 1000);
  });
};

// Create a new product
const createProduct = async (title: string, in_stock: boolean = true, ingredients: Ingredient[] = []) => {
  const sessionStorageProducts = await loadProductsFromSessionStorage();
  const existingProduct = sessionStorageProducts.find(
    (product) => product.title.toLowerCase() === title.toLowerCase()
  );

  if (existingProduct) {
    console.warn(`Product with title "${title}" already exists.`);
    return existingProduct;
  }

  const newProduct: Product = {
    id: getUniqueId(),
    title,
    in_stock,
    ingredients,
  };

  saveProductsToSessionStorage([...sessionStorageProducts, newProduct]);

  console.log(`Product created: ${JSON.stringify(newProduct)}`);
  return newProduct;
};

// Toggle product in-stock status
const toggleProductInStock = async (id: number) => {
  const sessionStorageProducts = await loadProductsFromSessionStorage();
  const product = sessionStorageProducts.find((p) => p.id === id);

  if (!product) {
    console.error(`Product with ID ${id} not found.`);
    return;
  }

  product.in_stock = !product.in_stock;

  sessionStorageProducts.forEach((p) => {
    if (p.ingredients.some((i) => i.product_id === id)) {
      p.in_stock = product.in_stock;
    }
  });

  saveProductsToSessionStorage([...sessionStorageProducts]);

  console.log(`Product with ID ${id} and its dependent salads have been updated.`);
};

// Fetch questions
const getQuestions = async (): Promise<Question[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(questions);
    }, 1000);
  });
};

// Export the database API
export const DB = {
    loadProductsFromSessionStorage ,
  getAllProducts,
  getProductById,
  getQuestions,
  toggleProductInStock,
  createProduct,
};
