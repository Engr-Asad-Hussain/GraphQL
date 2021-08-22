import { useEffect, useState } from 'react';
import axios from 'axios';

const instance = axios.create({
    method: 'get',
    responseType: 'json',
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `breaer ${process.env.GITHUB_ACCESS_TOKEN}`
    }
});

const fetchData = async() => {
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
    console.log(data);
}

function GithubGraphQL1() {
    useEffect( ()=>{
        fetchData();
    }, []);

    return (
        <div>
        </div>
    );
}
export default GithubGraphQL1;