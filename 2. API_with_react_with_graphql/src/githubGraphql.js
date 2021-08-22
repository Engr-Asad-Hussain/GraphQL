import { useEffect } from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `bearer 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`
    }
});

function GithubAPI() {

    const fetchData_js = async (organizationName) => {
        const QUERY_ORGANIZATION = `query {
            organization(login: "${organizationName}") {
                name
            }
        }`;

        const res = await api.post('/graphql', { query: QUERY_ORGANIZATION })
        console.log('GraphQL Response: ', res);
    }

    useEffect(() => {
        fetchData_js("qutbITech")
    }, [])



    return (
        <div>

        </div>
    );
}

export default GithubAPI;