import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { App } from '../client/App';

const app = express();

app.use(express.static('dist'));

app.get('*', (request, response) => {
  const html = renderToString(<App initialPath={request.path} />);

  response.send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thom NextJS App</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script type="module" src="../client/index.js"></script>
      </body>
    </html>`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
