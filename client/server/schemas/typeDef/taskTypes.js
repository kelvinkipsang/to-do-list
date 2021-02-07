const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const TaskType = new GraphQLObjectType({
  name: "Task",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    about: { type: GraphQLString },
  }),
});

module.exports = TaskType;
