import React from 'react';
import { render } from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { link } from './graphql/link';
import App from './App';

import './index.css';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
    resolvers: {
        Person: {
            // age: () => {
            //     console.log('foop');
            //     return '7';
            // }
        }
    }
});

render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
