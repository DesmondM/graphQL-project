const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

const users = [
    {id: '32', firstName: 'Greg', age: 25},
    {id: '33', firstName: 'Dori', age: 35},
    {id: '34', firstName: 'Sbongi', age: 25},
    {id: '35', firstName: 'Tessie', age: 6},
];

const UserType  = new GraphQLObjectType({
    name: 'User',
    fields:{
        id: {type: GraphQLString },
        firstName: {type:  GraphQLString},
        age: {type: GraphQLInt}
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user:{
            type: UserType,
            args: {id:{type:GraphQLString}},
            resolve(parentValue, args ){
                return _.find(users, {id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});