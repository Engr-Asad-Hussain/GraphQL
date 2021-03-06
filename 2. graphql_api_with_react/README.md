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
    1. [Graphql Example No. 1](https://github.com/Engr-Asad-Hussain/GraphQL/blob/main/2.%20API_with_react_with_graphql/src/githubGraphQL1.js): This example includes operation type as query. You will learn about headers, authentication, environmental variables and how to make query with graphql. 
    
    2. [Graphql Example No. 2](https://github.com/Engr-Asad-Hussain/GraphQL/blob/main/2.%20API_with_react_with_graphql/src/githubGraphQL2.js): This example includes operation type as query with a query name queryForOrganization. You will learn headers, authentication, environmental variables and how to make a query with graphql.

    3. [Graphql Example No. 3](https://github.com/Engr-Asad-Hussain/GraphQL/blob/main/2.%20API_with_react_with_graphql/src/githubGraphQL3.js): This example includes operation type as query with dynamic organization name. You will learn headers, authentication, environmental variables and how to make a query with graphql.

    4. [Graphql Example No. 4](https://github.com/Engr-Asad-Hussain/GraphQL/blob/main/2.%20API_with_react_with_graphql/src/githubGraphQL4.js): This example includes operation type as query with variables and dynamic operations.

    5. [Graphql Example No. 5](https://github.com/Engr-Asad-Hussain/GraphQL/blob/main/2.%20API_with_react_with_graphql/src/githubGraphQL5.js): This example includes operation type as mutation with variables, directives and dynamic operations. You'll learn about graphql directives, mutation, addStart / removeStart and destucturing with-in destucture.