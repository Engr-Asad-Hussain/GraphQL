import { useState, useEffect } from 'react';
import axios from 'axios';
import GithubGraphQL1 from './githubGraphQL1';

const api = axios.create({
    method: 'get',
    responseType: 'json',
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
    }
});

const fetchData = async(setData) => {
    const MUTATION_REPOSITORY = `mutation AddOrRemoveStar (
        $repoID: ID!,
        $flag: Boolean!){
        addStar(input: {starrableId: $repoID}) @include(if: $flag) {
          starrable {
            viewerHasStarred
          }
        }
        
        removeStar(input: {starrableId: $repoID}) @skip(if: $flag) {
          starrable {
            viewerHasStarred
          }
        }
      }`;
    const { data: { data: { removeStar: starRemoveFromRepo } } } = await api.post('/graphql',
        { 
            query: MUTATION_REPOSITORY,
            variables: {
                repoID: "MDEwOlJlcG9zaXRvcnkzOTc5ODI5MDQ=",
                flag: false
            }
        }
    );
    setData(starRemoveFromRepo);
}

function GithubGraphQL5() {
    let [data, setData] = useState(null);

    useEffect(()=>{
        fetchData(setData);
    }, []);

    return (
        <div>
            <pre>
                UserData: 
                <hr />
                { data && JSON.stringify(data, null, 4)}
                <hr />
            </pre>
        </div>
    );
}
export default GithubGraphQL5;
