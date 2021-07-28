
import axios from "axios";
import { API_KEY } from "./key";

export const getProducts = async (recipe) => {
  try {
    const {data}= await axios.get(
      `https://api.spoonacular.com/food/search?query=${recipe}&number=100&apiKey=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
