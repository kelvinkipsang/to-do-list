const express = require("express");
const app = express();
const PORT = 4000;
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(  
  "/graphql",
  graphqlHTTP({
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Server running on localost:4000");
});
