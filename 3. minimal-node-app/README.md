# Simple Node Application

An easy way to get started with JavaScript on the command line. [Read more about it](https://www.robinwieruch.de/minimal-node-js-babel-setup).


## Step # 01:
Clone boilerplate node application
```git clone https://github.com/rwieruch/minimal-node-application.git
cd minimal-node-application
```

## Step # 02:
Install dependencies:
```
npm install apollo-boost graphql --save
npm install cross-fetch --save
```

After installation of library pacakage.json looks like;
```
"dependencies": {
    "apollo-boost": "^0.4.9",
    "cross-fetch": "^3.1.4",
    "dotenv": "^8.2.0",
    "graphql": "^15.5.3"
}
```

## Step # 03
Run Application 
```
npm start
```

## About Projects
<ins>[Project 01:](https://github.com/Engr-Asad-Hussain/GraphQL/blob/main/3.%20minimal-node-app/src/index0.js)</ins>

Illustrates the use of graphql query with server side node.js. Includes 'dotenv', 'cross-fetch', and ApolloClient, { gql } from 'apollo-boost'.

<ins>[Project 02:](https://github.com/Engr-Asad-Hussain/GraphQL/blob/main/3.%20minimal-node-app/src/index1.js)</ins>

Illustrates the use of graphql query with variables with server side node.js. Includes 'dotenv', 'cross-fetch', and ApolloClient, { gql } from 'apollo-boost'.

<ins>[Project 03:](https://github.com/Engr-Asad-Hussain/GraphQL/blob/main/3.%20minimal-node-app/src/index2.js)</ins>

Illustrates the use of graphql mutation with variables with server side node.js. Includes 'dotenv', 'cross-fetch', and ApolloClient, { gql } from 'apollo-boost'.