import React, { Component } from 'react';
import { graphql, QueryRenderer } from "react-relay";

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={this.props.environment}
        query={graphql`
          query AppQuery {
            foo {
              id
              name
            }
          }
        `}
        variables={{}}
        render={({props, error}) => {
          if (error) {
            return <div>{error.message}</div>;
          }

          return props
            ? props.foo && props.foo.name
            : "Loading...";
        }}
      />
    );
  }
}

export default App;
