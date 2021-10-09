# Project Desciption:
This tutorial illustrates how to use apollo-client, graphql with react. Follow the steps to get started.

## 1. Setup
Create a simple react application
```
npx create-react-app my-app
npm install @apollo/client graphql
```
**@apollo/client:** This single package contains virtually everything you need to set up Apollo Client. It includes the in-memory cache, local state management, error handling, and a React-based view layer.

**graphql:** This package provides logic for parsing GraphQL queries.

## 2. Initialize ApolloClient
Lets initialize ApolloClient instance in index.js
```
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
});
```
**uri** specifies the URL of our GraphQL server.

**cache** is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.

That's it! Our client is ready to start fetching data. Now before we start using Apollo Client with React, let's first try sending a query with plain JavaScript.

In the same index.js file, call ```client.query()``` with the query string (wrapped in the gql template literal) shown below:
```
const QUERY_DATA = gql`
    query GetRates {
        rates(currency: "USD") {
            currency
            rate
        }
    }
`;

client.query({
    query: QUERY_DATA
})
    .then((res)=>{ console.log(res) });
```
Run this code, open your console, and inspect the result object. You should see a ```data``` property with ```rates``` attached, along with some other properties like ```loading``` and ```networkStatus```. Nice!

## 3. Connect your client to React
You connect Apollo Client to React with the ApolloProvider component. Similar to React's Context.Provider, 

**ApolloProvider** wraps your React app and places Apollo Client on the context, which enables you to access it from anywhere in your component tree.

In index.js, let's wrap our React app with an ApolloProvider.
```
ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
```

## 4. Fetch data with ```useQuery```:
After your ApolloProvider is hooked up, you can start requesting data with ```useQuery```. useQuery is a React hook that shares GraphQL data with your UI.

In app.js, let's first define the query we want to execute by wrapping it in the gql template literal:
```
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const QUERY_DATA = gql`
    query GetRates {
        rates(currency: "USD") {
            currency
            rate
        }
    }
`;
```
Now introduce ```useQuery``` in App function:
```
function App() {
    const { loading, error, data } = useQuery(QUERY_DATA);
    
    if (loading) { return <p>Loading... </p> }
    if (error) { return <p>Error ... </p> }

    return (
        <div>
            Hello World
            <h2>Apollo Client</h2>
            {data.rates.map(({currency, rate})=>{
                return (
                    <p key={currency}>{currency}: {Number(rate).toFixed(2)}</p>
                );
            })}
            <p>End ... </p>
        </div>
    );
}
```
Whenever this component renders, the useQuery hook automatically executes our query and returns a result object containing ```loading```, ```error```, and ```data``` properties.

When your app reloads, you should briefly see a loading indicator, followed by a list of exchange rates! If you don't, you can follow the tutorial in [Get started with ApolloClient](https://www.apollographql.com/docs/react/get-started/).

Congrats, you just made your first component that renders with GraphQL data from Apollo Client! 🎉 Now you can try building more components that use useQuery and experiment with the concepts you just learned.

------------------------------------------------------------
[Query Documentataion](https://www.apollographql.com/docs/react/data/queries/)


[Mutataion Documentation](https://www.apollographql.com/docs/react/data/mutations/)