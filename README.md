This is a template for creating demos with react and relay. Because our test GraphQL server is running in the browser, these demos can be hosted on github pages or any static host.

Use the command `yarn relay` to run the relay compiler.
Use the command `yarn start` to run a development server.
Use the command `yarn build` to build the static site to the `/docs` directory.


We build to the `/docs` directory instead of `/dist` or `/build` to make it easier to host for free on github pages.