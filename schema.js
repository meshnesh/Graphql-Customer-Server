const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = require('graphql');

//Hard code data
const customers = [
    {id: '1', name: 'John Doe', email: 'jdoe@gmail.com', age: 30},
    {id: '2', name: 'Jane Doe', email: 'janeD@yahoo.com', age: 25},
    {id: '3', name: 'Alex Sanchez', email: 'AlexSan@gmail.com', age: 35}
]
//Customer Type
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: {type:GraphQLString},
        name: {type:GraphQLString},
        nemaiame: {type:GraphQLString},
        age: {type:GraphQLInt}
    })
});

//Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields : {
        customer:{
            type:CustomerType,
            args: {
                id: {type: GraphQLString}
            },
            resolve(parentValue, args){
                for(let i = 0;i< customers.length;i++){
                    if(customers[i].id == args.id){
                        return customers[i];
                    }
                }
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});