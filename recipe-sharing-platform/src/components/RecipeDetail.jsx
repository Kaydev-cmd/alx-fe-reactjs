import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        const foundRecipe = data.find(
          (recipe) => recipe.id === parseInt(id, 10)
        );

        if (!foundRecipe) {
          setError("Recipe not found");
        } else {
          setRecipe(foundRecipe);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading recipe...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      className="container flex flex-col gap-2 rounded-xl shadow-md bg-white"
      style={{ padding: "22px" }}
    >
      <h1 className="font-bold text-xl">{recipe.title}</h1>
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full rounded-xl lg:w-1/3"
        />
      )}
      <p>{recipe.summary}</p>

      <h2 className="font-semibold text-lg">Ingredients:</h2>
      <ul className="list-disc list-inside flex flex-col gap-1">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient || "Ingredient details not available"}
          </li>
        ))}
      </ul>

      <h2 className="font-semibold text-lg">Cooking Ingredients</h2>
      <ul className="list-decimal list-inside flex flex-col gap-1">
        {recipe.cooking_instructions.map((instruction, index) => (
          <li key={index}>
            {instruction || "Instruction details not available"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetail;
