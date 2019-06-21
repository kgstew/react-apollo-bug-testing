import React from 'react';
import { Query, compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_PEOPLE = gql`
    query AllPeople {
        people {
            id
            name
            age
        }
    }
`;

const ALL_PEOPLE_CLIENT = gql`
    query {
        people {
            id
            name
            age @client
        }
    }
`;

const Foo = () => {
    return (
        <Query query={ALL_PEOPLE_CLIENT}>
            {({ loading, data }) => {
                console.log(data);
                if (loading) {
                    return <p>Loading</p>;
                }
                const { people } = data;
                return <ul>{!people ? 'foo' : people.map(person => <li key={person.id}>{person.name}</li>)}</ul>;
            }}
        </Query>
    );
};

const App = props => {
    const { loading, data } = props;
    const { people } = data;

    if (loading || !data) {
        return <p>Loading</p>;
    }

    console.log('data', data);

    return (
        <main>
            <h1>Apollo Client Error Template</h1>
            <p>
                This is a template that you can use to demonstrate an error in Apollo Client. Edit the source code and
                watch your browser window reload with the changes.
            </p>
            <p>
                The code which renders this component lives in <code>./src/App.js</code>.
            </p>
            <p>
                The GraphQL schema is in <code>./src/graphql/schema</code>. Currently the schema just serves a list of
                people with names and ids.
            </p>
            <ul>{!people ? 'Foo' : people.map(person => <li key={person.id}>{person.name}</li>)}</ul>
            <Foo />
        </main>
    );
};

export default compose(graphql(ALL_PEOPLE))(App);
