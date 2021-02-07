import GetTasks from "./Components/GetTasks";
import Form from "./Components/Form";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import "./App.css";

const link = from([
  new HttpLink({ uri: "http://localhost:4000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Form />
      <Gettasks />

    </ApolloProvider>
  );
}

export default App;
