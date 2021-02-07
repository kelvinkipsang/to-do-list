const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
const taskData = require("../tasks.json");

const TaskType = require("./typeDef/taskTypes");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllTask: {
      type: new GraphQLList(TaskType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return taskData;
      },
    },
  },
});
