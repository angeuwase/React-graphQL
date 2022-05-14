const fetch = require("node-fetch");

const resolvers = {
    Query:{
        allCocktails: async ()=> {
            const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");

            const data = await response.json();

            data.drinks.forEach(function(obj) {
                obj.id = obj.idDrink;
                obj.name = obj.strDrink;
                delete obj.idDrink;
                delete obj.strDrink;
                delete obj.strDrinkThumb;
              })

            return data.drinks
        }
    },

    Cocktail:{
        drinkInfo: async (parent) => {
            const {id} = parent;

            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
            
            const data = await response.json();

            const rawDrink = data.drinks[0];

            const drink = {};
            drink.category = rawDrink.strCategory;
            drink.isAlcoholic = rawDrink.strAlcoholic === 'Alcoholic';
            drink.glass = rawDrink.strGlass;
            drink.instructions = rawDrink?.strInstructions;

            return drink
        }
    }
}

module.exports = resolvers;