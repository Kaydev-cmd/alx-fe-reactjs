import React from "react";
import { useState } from "react";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [formData, setFormData] = useState({ ...recipe });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={formData.title} onChange={handleChange} />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditRecipeForm;
