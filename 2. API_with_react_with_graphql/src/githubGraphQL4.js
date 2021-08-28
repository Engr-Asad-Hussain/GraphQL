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

const fetchData = async (setData) => {
    const QUERY_ORGANIZATION = `query facebookOrganization (
        $orgName: String!){
        organization(login: $orgName) {
            name
            description
            url
      }
    }`;
    const { data } = await api.post('/graphql', { 
            query: QUERY_ORGANIZATION,
            variables: {
                orgName: "google"
            } 
        }
    );
    setData(data);
}

function GithubGraphQL4() {
    let [data, setData] = useState(null);

    useEffect(()=>{
        fetchData(setData);
    }, []);
    
    return(
        <div>
            <pre>
                UserData:
                { data && JSON.stringify(data, null, 4)}
            </pre>
        </div>
    );
}
export default GithubGraphQL4;