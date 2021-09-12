import 'dotenv/config';
import 'cross-fetch/polyfill';
import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    request: operation => {
        operation.setContext({
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
            }
        });
    }
});

const QUERY_ORGANIZATION = gql`
    query {
        organization(login: "facebook") {
            name
            url
            createdAt
            avatarUrl 
        }
    }`;

client.query({
    query: QUERY_ORGANIZATION
})
    .then((res) => { console.log("Query Get: ", res) });