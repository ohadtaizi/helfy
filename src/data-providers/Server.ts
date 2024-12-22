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

const toggleProductInStock = async (id: number) => {
    //your implementation here
}



const getQuestions = async (): Promise<Question[]> => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(questions);
        }, 1000);
    })
}

export const DB = {
    getAllProducts,
    getProductById,
    getQuestions
}

