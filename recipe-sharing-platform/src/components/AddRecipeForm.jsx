import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { title, ingredients, instructions } = formData;

    if (!title.trim() || !ingredients.trim() || !instructions.trim()) {
      return "Please fill out fields";
    }

    const ingredientList = ingredients
      .split(/\n|,/)
      .map((item) => item.trim())
      .filter(Boolean);

    if (ingredientList.length < 2)
      return "Please list at least two ingredients";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title: formData.title,
      summary: formData.instructions.slice(0, 100) + "...",
      image: "", // Will add image later,
      ingredients: formData.ingredients
        .split(/\n|,/)
        .map((index) => index.trim()),
      cooking_instructions: formData.instructions
        .split(/\n|,/)
        .map((index) => index.trim()),
    };

    const existingRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

    const updatedRecipes = [...existingRecipes, newRecipe];

    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    setLoading(true);

    setSuccess("Recipe added successfully!");

    setLoading(false);

    setFormData({ title: "", ingredients: "", instructions: "" });
  };

  return (
    <form className="container flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          placeholder="Recipe Title"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          name="ingredients"
          id="ingredients"
          rows={10}
          cols={40}
          placeholder="Write the ingredients here..."
          value={formData.ingredients}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          name="instructions"
          id="instructions"
          rows={10}
          cols={40}
          placeholder="Write the instructions here..."
          value={formData.instructions}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className="bg-blue-600" disabled={loading}>
        {loading ? "Processing" : "Submit"}
      </button>
      {error && (
        <p className="text-red-500 text-center" style={{ margin: "12px 0" }}>
          {error}
        </p>
      )}
      {success && (
        <p className="text-green-600 text-center" style={{ margin: "12px 0" }}>
          {success}
        </p>
      )}
    </form>
  );
};

export default AddRecipeForm;
