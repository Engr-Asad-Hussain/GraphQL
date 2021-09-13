import 'dotenv/config';
import 'cross-fetch/polyfill';
import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    request: (opr) => {
        opr.setContext({
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
            }
        });
    }
});

const QUERY_ORG = gql`
    query getQuery ($org: String!, $flag: Boolean!){
        organization(login: $org) {
            name
            email
            description
            avatarUrl @include(if: $flag)
            url
        }
    }`;

client.query({
    query: QUERY_ORG,
    variables: {
        org: "google",
        flag: false
    }
})
    .then((res) => { console.log(res) });