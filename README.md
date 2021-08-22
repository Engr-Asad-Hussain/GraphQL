# What is GraphQL?
- GraphQL is an open source query language created by Facebook. Before GraphQL went open source in 2015, Facebook used it internally for their mobile applications since 2012, as an alternative to the common REST architecture. 
- It allows requests for specific data, giving clients more control over what information is sent. It eliminates overfetching problem involved with RESTful  architecture.
- A query language like GraphQL on the server-side and client-side lets the client decide which data it needs by making a single request to the server. Network usage was reduced dramatically for Facebook’s mobile applications as a result, because GraphQL made it more efficient with data transfers.
- A GraphQL operation is either a query (read), mutation (write), or subscription (continuous read). Each of those operations is only a string that needs to be constructed according to the GraphQL query language specification. 


### 1. Example of API Request Without GraphQL
<ins>Objective:</ins>
Illustrates the use of REST API with react application using Axios library.

<ins>About Project:</ins>
This project fetches user data and repositories from github public api and renders it on DOM.


### 2. Example of API With GraphQL
<ins>Objective:</ins>
Illustrates the use of GraphQL with react application using Axios library.

<ins>About Project:</ins>
REST API's has mutliple endpoints and we can't have any control on API call; that is, it returns all the properties of API although we need it or not. Compared to GraphQL, it has one endpoint and it will only returns specific data which we want. This will save out processing time and network request time.

This project returns specific users data from github public api and renders it on DOM. Project includes examples of mutation and query as operation types.