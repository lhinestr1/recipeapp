import axios from "./api";

export interface Recipe {
  id: string;
  title: string;
  image: string;
  readyInMinutes: number;
  sourceName: string;
  healthScore: number;
  instructions: string;
}

export const getRecipes = (limit = 5) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=a72db80256164b13986ce40fe008e0c7&number=${limit}`
      )
      .then((response) => {
        return response.data.recipes.map((recipe: Recipe) => ({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          sourceName: recipe.sourceName,
          readyInMinutes: recipe.readyInMinutes,
          healthScore: recipe.healthScore,
          instructions: recipe.instructions,
        }));
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

//simulado peticions de productos
export const getProducts = (limit = 5) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=a72db80256164b13986ce40fe008e0c7&number=${limit}`
      )
      .then((response) => {
        return response.data.recipes.map((recipe: Recipe) => ({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          sourceName: recipe.sourceName,
          readyInMinutes: recipe.readyInMinutes,
          healthScore: recipe.healthScore,
          instructions: recipe.instructions,
        }));
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

//simulado peticions de tendencias
export const getTrend = (limit = 5) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=a72db80256164b13986ce40fe008e0c7&number=${limit}`
      )
      .then((response) => {
        return response.data.recipes.map((recipe: Recipe) => ({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          sourceName: recipe.sourceName,
          readyInMinutes: recipe.readyInMinutes,
          healthScore: recipe.healthScore,
          instructions: recipe.instructions,
        }));
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};
