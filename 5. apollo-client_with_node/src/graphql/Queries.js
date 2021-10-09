export const LOAD_USERS = gql`
    query GetAllUserData{
        getAllUsers {
            name
            age
            married
        }
    }
`;