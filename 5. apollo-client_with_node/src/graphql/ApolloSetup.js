import { onError } from '@apollo/client/link/error';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    split,
    HttpLink
} from '@apollo/client';


// This link is for our node.js server
const wsLink = new WebSocketLink({
    uri: 'ws://localhost:4000/graphql',
    options: {
        reconnect: true
    }
});


// This link is used to get queries and mutations
const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql'
});

// https://www.apollographql.com/docs/react/data/error-handling/
const errorLink = onError(({ graphqlErrors, networkErrors })=>{
    if (graphqlErrors) {
        graphqlErrors.map(({ message })=>{
            alert('GraphQL Error: ', message)
        });
    }

    // To retry on network error, we recommend the RetryLink
    // instead of onError link. onError just logs the error.
    if (networkErrors) {
        console.log(`[Network Error]: ${networkErrors}`);
    }
});

const splitLink = split(
    ({ query })=>{
        const definition = getMainDefinition(query);
        return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
        )
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errorLink, splitLink])
});

export { client, ApolloProvider }