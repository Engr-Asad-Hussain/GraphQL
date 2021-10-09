import { gql, useQuery } from '@apollo/client';
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
});

const QUERY_DATA = gql`
    query GetRates {
        rates(currency: "USD") {
            currency
            rate
        }
    }
`;

function Query() {
    const { data, error, loading } = useQuery(QUERY_DATA);
    if (loading) return <p>Loading ... </p>
    if (error) return <p>Error Found</p>

    return (
        <div>
            <h2>List of Dogs</h2>
            {data.rates.map(({ currency, rate })=>{
                return (
                    <p key={currency}>{currency}: {Number(rate).toFixed(2)}</p>
                );
            })}
        </div>
    );
}

export {
    Query,
    ApolloProvider,
    client
}