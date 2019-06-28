import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_PEOPLE = gql`
    query {
        people {
            id
            name
            age @client
        }
    }
`;

const App = props => {
    return (
        <Query query={ALL_PEOPLE}>
            {({ loading, data }) => {
                if (loading || !data) {
                    return <p>Loading</p>;
                }

                console.log('data', data);

                const { people } = data;

                return (
                    <main>
                        <h1>Apollo Client Error Template</h1>
                        <p>
                            Data returns and empty object when fetching a field using the @client directive when that
                            field does not yet exist in the cache and does not have a resolver.
                        </p>
                        <ul>{!people ? 'No Data' : people.map(person => <li key={person.id}>{person.name}</li>)}</ul>
                    </main>
                );
            }}
        </Query>
    );
};

export default App;
