import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      raffleTickets {
        _id
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
        _id
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

export const QUERY_ALL_RAFFLES = gql`
  {
    raffles {
      _id
      name
      description
      image
      ticketArray {
        _id
        username {
          _id
        }
      }
    }
  }
`;
