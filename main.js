import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import './node_modules/graphiql/graphiql.css';
import './main.css';

// TODO: Don't hardcode this and instead read from a command line argument.
// Default to localhost:8080/graphql.
const serverURL = 'http://localhost:8080';

function graphQLFetcher(graphQLParams) {
  return fetch(`${serverURL}/graphql`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} />, document.getElementById('container'));
