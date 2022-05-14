const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');


const mocks = {
    Query: () => ({
        allStudents: () => [...new Array(6)]
      }),
    Student: () => ({
      id: () => 'student_01',
      full_name: () => 'Ange Uwase',
      email: () => 'test@gmail.com',
      mobile_number: () => '0123456789',
      residence_hall: () => {
        return {
          id: 'hall_01',
          name: 'Hall A',
          address: '90 Beaver Drive Cunningham CU3 GH3'
        };
      },
      dietary_requirements: () => 'N/A',
    })
  };

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(() => {
    console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at https://studio.apollographql.com/dev
    `);
  });