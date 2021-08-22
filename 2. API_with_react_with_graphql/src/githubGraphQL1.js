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

const FetchData = async() => {
    const QUERY_ORGANIZATION = `query {
        organization(login: "facebook") {
            name
            description
        }
    }`
    const data = await instance.post(
        '/graphql', 
        { query: QUERY_ORGANIZATION }
        );
        setUserData(data);
        console.log(data);
    }
    
function GithubGraphQL1() {
    let [userData, setUserData] = useState(null);
    console.log(process.env.REACT_APP_GITHUB_ACCESS_TOKEN);
    useEffect( ()=>{
        FetchData();
    }, []);

    return (
        <div>
            UserData:
            {userData && JSON.stringify(userData, null, 4)}
        </div>
    );
}
export default GithubGraphQL1;