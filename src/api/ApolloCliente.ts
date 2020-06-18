import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
  uri: 'http://localhost:4000'
})

// import { useQuery } from "@apollo/react-hooks";
// import { gql } from "apollo-boost";

// const EXCHANGE_RATES = gql`
// {
//   products {
//     id
//     name
//     stock
//   }
// }
// `;

// const { loading, error, data } = useQuery(EXCHANGE_RATES);

// if (loading) {
// console.log("Loading...");
// }

// if (error) {
// console.log(`Error! ${error.message}`);
// }
