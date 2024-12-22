import { useState } from "react";
import "./create-salad.css";

const mockIngredients = [
  "Cucumber",
  "Tomato",
  "Lettuce",
  "Onion",
  "Red Pepper",
  "Olive Oil",
  "Vinegar",
  "Garlic",
  "Feta Cheese",
  "Basil",
  "Avocado",
  "Chickpeas",
  "Quinoa",
  "Spinach",
  "Carrot",
];

const CreateSalad = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [saladName, setSaladName] = useState("");

  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((ing) => ing !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleCreateSalad = () => {
    if (!saladName.trim() || selectedIngredients.length === 0) {
      alert("Please provide a salad name and select at least one ingredient.");
      return;
    }
    console.log(`Salad Created: ${saladName}, Ingredients:`, selectedIngredients);
    setSaladName("");
    setSelectedIngredients([]);
    alert(`Salad "${saladName}" has been created!`);
  };

  return (
    <div className="create-salad-page">
      <h1>Create New Salad</h1>
      <div className="ingredient-list">
        {mockIngredients.map((ingredient, idx) => (
          <button
            key={idx}
            className={`ingredient-button ${
              selectedIngredients.includes(ingredient) ? "selected" : ""
            }`}
            onClick={() => toggleIngredient(ingredient)}
          >
            {ingredient}
          </button>
        ))}
      </div>
      <input
        type="text"
        placeholder="Enter salad name..."
        value={saladName}
        onChange={(e) => setSaladName(e.target.value)}
      />
      <button onClick={handleCreateSalad}>Submit</button>
    </div>
  );
};

export default CreateSalad;
