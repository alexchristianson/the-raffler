const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    username: String
    raffleTickets: [Ticket]
    rafflesWon: [Raffle]
  }

  type Raffle {
    name: String
    description: String
    image: String
    ticketArray: [Ticket]
    timer: Int
  }

  type Ticket {
    _id: ID!
    ticketId: Int
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
    raffleTicket(ticketId: Int): Ticket
    rafflesWon(username: String): [Raffle]
    raffles(ticketId: Int): Ticket
  }


  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, username: String!, password: String!): Auth
    addTicket(ticketId: Int, _id: ID, username: String): Ticket
    
  }
`;

module.exports = typeDefs;
