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

export default App;