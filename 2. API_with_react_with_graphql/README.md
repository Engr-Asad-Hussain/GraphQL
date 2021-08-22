# Steps & Guidlines

1. Start with creating react application
```
npx create-react-app my-app
cd my-app
npm start
```

2. Inside of a project install [Axios](https://axios-http.com/docs/intro)

```npm install axios``` or ```yarn add axios```

package.json file will look something like this after the installation of library
```
"dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^0.21.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.0.1"
  }
```

3. Generate and copy Access Token from Github Personal Access Token.

4. Create .env file in project folder and add REACT_APP_GITHUB_ACCESS_TOKEN=MyGithubAccessToken

5. There are different examples in this project.
    1. [GithubGraphQL1](https://github.com/Engr-Asad-Hussain/GraphQL/blob/main/2.%20API_with_react_with_graphql/src/githubGraphQL1.js): This example includes operation type as query. You will learn about headers, authentication, environmental variables and how to make query with graphql. 