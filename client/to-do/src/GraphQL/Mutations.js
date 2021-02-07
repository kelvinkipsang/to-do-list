import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createTask(
    $title: String!
    $about: String!
  ) {
    createTask(
      title: $title
      about: $about
      
    ) {
      id
    }
  }
`;
