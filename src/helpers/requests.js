const API_KEY="31a121e3ef874740851d319c6c374116";

export default {
   fetchItalian: `complexSearch?apiKey=${API_KEY}&cuisine=italian&number=100`,
   fetchPasta:`complexSearch?apiKey=${API_KEY}&query=pasta&number=100`,
   fetchGreek:`complexSearch?apiKey=${API_KEY}&excludeCuisine=greek&number=100`,
   fetchGluten:`complexSearch?apiKey=${API_KEY}&intolerances=gluten&number=100`,
   fetchVegetarian:`complexSearch?apiKey=${API_KEY}&diet=vegetarian&number=100`,
   fetchPan:`complexSearch?apiKey=${API_KEY}&equipment=pan&number=100`,
   fetchTomatoCheese:`complexSearch?apiKey=${API_KEY}&includeIngredients=tomato,chesse&number=100`,
   fetchEggs:`complexSearch?apiKey=${API_KEY}&excludeIngredients=eggs&number=100`,
   fetchMeals:`complexSearch?apiKey=${API_KEY}&type=maincourse&number=100`,
};

