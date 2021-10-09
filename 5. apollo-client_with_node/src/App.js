import { CREATE_USER_MUTATION } from './graphql/Mutations';
import { useMutation } from '@apollo/client';

import { LOAD_USERS } from './graphql/Queries';
import { useQuery } from '@apollo/client';

function App() {
    // Add user using mutation. This is the resolver function for gralhql mutation
    const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);
    const addUserHandler = ()=>{
        createUser({
            variables: {
                name: 'Shah',
                age: 26,
                married: false
            }
        });

        if (error) {
            console.log("Error on Create User ... ");   
        }
    }

    const { error2, loading, data } = useQuery(LOAD_USERS);
    if (loading) return <p>Loading ... </p>

    
    return (
        <div>
            <pre>
                { JSON.stringify(data, null, 4) }
                <button onClick={addUserHandler}>... Add User ...</button>
            </pre>
        </div>
    );
}
export default App;
