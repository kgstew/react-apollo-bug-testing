import { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from 'graphql';

const PersonType = new GraphQLObjectType({
    name: 'Person',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLString }
    }
});

const peopleData = [
    { id: 1, name: 'John Smith', age: '21' },
    { id: 2, name: 'Sara Smith', age: '34' },
    { id: 3, name: 'Budd Deey', age: '78' }
];

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        people: {
            type: new GraphQLList(PersonType),
            resolve: () => peopleData
        }
    }
});

export const schema = new GraphQLSchema({ query: QueryType });
