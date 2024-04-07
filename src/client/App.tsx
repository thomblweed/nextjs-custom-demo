import React from 'react';

import { Route } from './Route';
import { Router } from './Router';

export const App = ({ initialPath }: { initialPath: string }) => {
  return (
    <Router initialPath={initialPath}>
      <Route path="/">
        <div>
          <h1>Thom Next.js Home Page</h1>
        </div>
      </Route>
    </Router>
  );
};
