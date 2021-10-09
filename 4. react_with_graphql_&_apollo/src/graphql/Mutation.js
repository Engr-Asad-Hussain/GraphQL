import { useMutation, gql } from '@apollo/client';
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://sxewr.sse.codesandbox.io/',
    cache: new InMemoryCache()
});

const MUTATE_DATA = gql`
    mutation AddTodo ($text: String!) {
        addTodo(text: $text) {
            id
            text
        }
    }
`;


function Mutation() {
    // Second parameter of useMutation accepts default values.
    // useMutatin returns a addTodo function, we declare in our mutation.
    const [addTodo, { data, loading, error }] = useMutation(MUTATE_DATA, {
        variables: {
            text: "Default Value"
        }
    });
    const addEventHandler = ()=>{
        addTodo({
            variables: {
                text: "Assignment Completed"
            }
        });
    }

    if (loading) return <p>Submitting ...</p>
    if (error) return <p>Submit Error:- ErrorMessage: [${error.message}]</p>

    return (
        <div>
            <button onClick={addEventHandler}>... Add To-Do List ...</button>
        </div>
    );
}

export {
    Mutation,
    ApolloProvider,
    client
}