import { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
    method: 'get',
    responseType: 'json',
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
    }
});

const fetchData = async (orgName, setData) => {
    const QUERY_ORGANIZATION = `query randomQuery {
        organization(login: "${orgName}") {
          name
          location
          repositories(first: 2) {
            edges {
              node {
                name
                createdAt
                stargazerCount
              }
            }
          }
        }
        user(login: "Engr-Asad-Hussain") {
          userName: name
          userLocation: location
          repositories{
            repoCount: totalCount
          }
        }
      }`
    const { data } = await api.post(
        '/graphql',
        { query: QUERY_ORGANIZATION }
    );
    setData(data);
}

function GithubGraphQL3() {
    let [data, setData] = useState(null);

    useEffect(() => {
        fetchData("google", setData);
    });

    return (
        <div>
            <pre>
                UserData:
                {data && JSON.stringify(data, null, 4)}
            </pre>
        </div>
    );
}
export default GithubGraphQL3;
