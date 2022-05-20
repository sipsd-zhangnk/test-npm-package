const { jsonToGraphQLQuery } = require('json-to-graphql-query');

const query = {
    query: {
    }
};
const graphql_query = jsonToGraphQLQuery(query, { pretty: true });

console.log(graphql_query)