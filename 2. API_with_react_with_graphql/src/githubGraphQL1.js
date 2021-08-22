import { useEffect, useState } from 'react';
import axios from 'axios';


const instance = axios.create({
    method: 'get',  
    responseType: 'json',
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
    }
});

const fetchData = async (userData) => {
    const QUERY_ORGANIZATION = `query {
        organization(login: "facebook") {
            name
            email
            id
            url
            description
        }
    }`;
    const { data } = await instance.post(   // GraphQL always have "POST" request
        '/graphql',
        { query: QUERY_ORGANIZATION }
    );
    userData[1](data);
}

function GithubGraphQL1() {
    let userData = useState(null);  // equals to [data, setData] = useState(null)

    useEffect(() => {
        fetchData(userData);    // passed this hook to store our api in fetchData function
    });

    return (
        <div>
            <pre>
                UserData:
                {userData[0] && JSON.stringify(userData[0], null, 4)}
            </pre>
        </div>
    );
}
export default GithubGraphQL1;