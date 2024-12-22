import { useState } from "react";
import "./create-ingredient.css";
import { DB } from "../data-providers/Server";

const CreateIngredient = () => {
  const [ingredientName, setIngredientName] = useState("");

  const handleCreateIngredient = async () => {
    if (!ingredientName.trim()) {
      alert("Please enter a valid ingredient name.");
      return;
    }
    try {
        // Call the createProduct function from the server
        const newIngredient = await DB.createProduct(ingredientName);
        alert(`Ingredient "${newIngredient.title}" has been created!`);
        setIngredientName(""); // Reset the input field
      } catch (error) {
        console.error("Error creating ingredient:", error);
        alert("Failed to create ingredient. Please try again.");
      }
  };

  return (
    <div className="create-ingredient-container">
      <div className="create-ingredient-box">
        <h1>Create New Ingredient</h1>
        <input
          type="text"
          placeholder="Enter ingredient name"
          value={ingredientName}
          onChange={(e) => setIngredientName(e.target.value)}
        />
        <button onClick={handleCreateIngredient}>Submit</button>
      </div>
    </div>
  );
};

export default CreateIngredient;
