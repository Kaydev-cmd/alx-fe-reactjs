import React, { useEffect } from "react";
import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore();

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h4>{recipe.title}</h4>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations at the moment</p>
      )}
    </div>
  );
};

export default RecommendationsList;
