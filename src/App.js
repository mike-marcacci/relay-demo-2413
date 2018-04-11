import React, { Component } from 'react';
import { graphql, QueryRenderer } from "react-relay";

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={this.props.environment}
        query={graphql`
          query AppQuery {
            everything {
              ...on Wine {
                id
                vintage
              }

              ...on Record {
                id
                vintage
              }
            }
          }
        `}
        variables={{}}
        render={({props, error}) => {
          if (error) {
            return <div>{error.message}</div>;
          }

          return props
            ? "Loaded!"
            : "Loading...";
        }}
      />
    );
  }
}

export default App;
