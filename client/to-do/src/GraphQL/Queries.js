import { gql } from "@apollo/client";

export const LOAD_TASKS = gql`
  query {
    getAllTask {
      id
      title
      about
      
    }
  }
`;