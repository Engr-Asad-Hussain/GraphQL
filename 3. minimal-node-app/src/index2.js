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

const ADD_STAR = gql`
    mutation addStar($repoId: ID!) {
        addStar(input: {starrableId: $repoId}) {
            starrable {
              viewerHasStarred
              id
            }
        }
    }`;

client.mutate({
    mutation: ADD_STAR,
    variables: {
        repoId: "MDEwOlJlcG9zaXRvcnk0MDMzNTg3OTc=",
    }
})
    .then((res) => { console.log(res) })