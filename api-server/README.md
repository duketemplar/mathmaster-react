## Nordnet Mock API Server

This server is started when you do `npm start` together with the webpack dev server.
The API is specified in the [fixtures](fixtures/) folder. It uses the same folder structure as the request url.

When creating new fixtures that need authentication, add an item to loginRequiredPaths in [json-fixtures.js](fixtures/json-fixtures.js).