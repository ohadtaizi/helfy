import React, { useEffect, useState } from "react";
import { DB, Product } from "../data-providers/Server";
import "./create-salad.css";

const CreateSalad = () => {
  const [availableIngredients, setAvailableIngredients] = useState<Product[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [saladName, setSaladName] = useState("");

  useEffect(() => {
    const fetchIngredients = async () => {
      const products = await DB.loadProductsFromSessionStorage();
      // Filter products with empty ingredients array
      const emptyIngredients = products.filter((product) => product.ingredients.length === 0);
      setAvailableIngredients(emptyIngredients);
    };

    fetchIngredients();
  }, []);

  const toggleIngredient = (ingredient: string) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients((prev) =>
        prev.filter((item) => item !== ingredient)
      );
    } else {
      setSelectedIngredients((prev) => [...prev, ingredient]);
    }
  };

  const handleSubmit = async () => {
    if (!saladName.trim()) {
      alert("Please enter a valid name for the salad.");
      return;
    }
    if (selectedIngredients.length === 0) {
      alert("Please select at least one ingredient.");
      return;
    }

    try {
      const ingredientIds = availableIngredients
        .filter((ingredient) => selectedIngredients.includes(ingredient.title))
        .map((ingredient) => ({
          product_id: ingredient.id,
          quantity: 1, // Default quantity, can be adjusted
        }));

      await DB.createProduct(saladName, true, ingredientIds);

      alert(`Salad "${saladName}" created successfully!`);
      setSaladName("");
      setSelectedIngredients([]);
    } catch (error) {
      console.error("Error creating salad:", error);
      alert("Failed to create salad. Please try again.");
    }
  };

  return (
    <div className="create-salad-container">
      <div className="create-salad-box">
        <h1>Create new salad</h1>
        <div className="ingredients-grid">
          {availableIngredients.map((ingredient) => (
            <button
              key={ingredient.id}
              className={`ingredient-btn ${
                selectedIngredients.includes(ingredient.title) ? "selected" : ""
              }`}
              onClick={() => toggleIngredient(ingredient.title)}
            >
              {ingredient.title}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Enter salad name"
          value={saladName}
          onChange={(e) => setSaladName(e.target.value)}
          className="salad-name-input"
        />
        <button onClick={handleSubmit} className="submit-btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateSalad;
