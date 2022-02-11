import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $username: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      username: $username
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

// send in raffleId as a param too
// make sure it matches in the typedefs
export const ADD_TICKET = gql`
  mutation addTicket($raffleId: String!) {
    addTicket(raffleId: $raffleId) {
      _id
      username {
        _id
        username
      }
    }
  }
`;
