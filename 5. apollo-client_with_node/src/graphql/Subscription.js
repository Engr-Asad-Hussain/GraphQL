import { gql } from '@apollo/client';

export const SUBSCRIBE_USER_ADD = gql`
    subscription {
        newUser {
            name
            age
        }
    }
`;