const {gql} = require('apollo-server');

const typeDefs = gql`
  type Cocktail {
      id: ID!
      name: String!
      drinkInfo: Info!
  }

  type Info {
      category: String!
      isAlcoholic: Boolean!
      glass: String!
      instructions: String
  }

  type Query {
      "Get all cocktails"
      allCocktails: [Cocktail!]!
  }
`;
module.exports = typeDefs;

