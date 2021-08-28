import { useState, useEffect } from 'react';
import axios from 'axios';

const instance = axios.create({
    method: 'get',
    responseType: 'json',
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
    }
});

const fetchData = async (setData) => {
    const QUERY_ORGANIZATION = `query queryForOrganization {
        organization(login: "facebook") {
            name
            email
            id
            url
            description
        }
    }`
    const { data } = await instance.post(
        '/graphql',
        { query: QUERY_ORGANIZATION }
    );
    setData(data);
}


function GithubGraphQL2() {
    let [data, setData] = useState(null);

    useEffect(()=>{
        fetchData(setData);
    }, []);

    return (
        <div>
            <pre>
                User Data:
                { data && JSON.stringify(data, null, 4)}
            </pre>
        </div>
    );
}
export default GithubGraphQL2;