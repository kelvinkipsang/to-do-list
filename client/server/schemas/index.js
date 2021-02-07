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

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createTask: {
      type: TaskType,
      args: {
        title: { type: GraphQLString },
        about: { type: GraphQLString },
      },
      resolve(parent, args) {
        taskData.push({
          id: taskData.length + 1,
          title: args.title,
          about: args.about,
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
