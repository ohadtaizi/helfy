import { products } from "../mock-data/products"
import { questions } from "../mock-data/questions";

let UNIQUE_ID = 2000;


const getDeepCopy = (obj: any) => JSON.parse(JSON.stringify(obj));

//feel free to add funcitons

export interface Ingredient {
    product_id: number;
    quantity: number
}
export interface Product {
    id: number;
    title: string;
    in_stock: boolean;
    ingredients: Ingredient[]
}

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
}

const getAllProducts = async (): Promise<Product[]> => {
    //DO NOT EDIT THIS FUNCTION
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getDeepCopy(products));
        }, 1000);
    })
}

const getProductById = async (id: number): Promise<Product | undefined> => {
    // DO NOT EDIT THIS FUNCTION
    const product = products.find(product => product.id === id);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getDeepCopy(product));
        }, 1000);
    })
}


const createProduct = async () => {
    UNIQUE_ID += 1;
    //your implementation here

}

// Toggle product in-stock status
const toggleProductInStock = async (id: number) => {
    // Fetch all products
    const allProducts = await getAllProducts();

    // Find the product to toggle
    const product = allProducts.find((p) => p.id === id);
    if (!product) {
        console.error(`Product with ID ${id} not found.`);
        return;
    }

    // Toggle the stock status of the product
    product.in_stock = !product.in_stock;

    // Update all salads that use this product as an ingredient
    allProducts.forEach((p) => {
        if (p.ingredients.some((i) => i.product_id === id)) {
            p.in_stock = product.in_stock;
        }
    });

    // Replace the original array with updated products
    products.length = 0;
    products.push(...allProducts);

    console.log(`Product with ID ${id} and its dependent salads have been updated.`);
};


const getQuestions = async (): Promise<Question[]> => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(questions);
        }, 1000);
    })
}
// Update an existing product
const updateProduct = async (product: Product) => {
    const index = products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
        products[index] = product;
        console.log(`Product with ID ${product.id} has been updated.`);
    } else {
        console.error(`Product with ID ${product.id} not found.`);
    }
};
export const DB = {
    getAllProducts,
    getProductById,
    getQuestions,
    toggleProductInStock,
    updateProduct,
}

