const {RESTDataSource} = require('apollo-datasource-rest');

class CocktailsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php';
    }
      
    getAllCocktails() {
        return this.get('?c=Cocktail');
      }

    getDrinkInfo(drinkId) {
        return this.get(`author/${authorId}`);
      }
  }
  module.exports = CocktailsAPI;