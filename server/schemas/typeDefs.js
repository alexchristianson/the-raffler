const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    username: String
    raffleTickets: [Int]
    rafflesWon: [Int]
  }

  type Raffle {
    name: String
    description: String
    image: String
    ticketArray: [Ticket]
  }

  type Ticket {
    username: User
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    raffleTickets(username: String): [Ticket]
  }


  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!,  email: String!, username: String!, password: String!): Auth
    
  }
`;

module.exports = typeDefs;
