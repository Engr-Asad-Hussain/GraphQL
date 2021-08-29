import { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
    method: 'get',  // default method is GET. If we don't define method here, the code will run perfectly
    baseURL: 'https://api.github.com'
});

function GithubAPI() {
    const [userData, setUserData] = useState(null);
    const [userRepo, setUserRepo] = useState(null);

    useEffect( ()=>{
        (async ()=>{
            const { data: profile } = await api.get('/users/Engr-Asad-Hussain');
            setUserData(profile);
            
            const { data: repositories } = await api.get('/users/Engr-Asad-Hussain/repos');
            setUserRepo(repositories);
        })();
    });
    return (
        <div>
            <pre>
                User Data:
                {userData && JSON.stringify(userData, null, 4)}
            </pre>
            <hr />
            <pre>
                User Repositories:
                {userRepo && JSON.stringify(userRepo, null, 4)}
            </pre>
        </div>
    );
}
export default GithubAPI;