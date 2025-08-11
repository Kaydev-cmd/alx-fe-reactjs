import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes", err));
  }, []);

  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white p-8 flex flex-col items-center gap-3 rounded-xl shadow-md transition-transform hover:scale-105 cursor-pointer"
          style={{ padding: "22px" }}
        >
          {recipe.image && (
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full rounded-lg"
            />
          )}
          <h2 className="font-semibold text-2xl">{recipe.title}</h2>
          <p>{recipe.summary}</p>

          <button
            className="bg-blue-600"
            style={{ marginTop: "8px" }}
            onClick={() => navigate(`/recipe/${recipe.id}`)}
          >
            See More
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
