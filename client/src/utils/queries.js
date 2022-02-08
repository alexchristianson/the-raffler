import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      raffleTickets {
        ticketId
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      raffleTickets {
          ticketId
      }
    }
  }
`;

export const QUERY_USERS = gql`
{
  users {
    _id
    firstName
    lastName
    email
    username
    raffleTickets {
      _id
    }
    rafflesWon {
      _id
    }
  }
}
`;