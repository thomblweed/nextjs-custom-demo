import React, { ReactNode, useContext } from 'react';

import { RouterContext } from './Router';

export const Route = ({ path, children }: { path: string; children: ReactNode }) => {
  const { path: currrentPath } = useContext(RouterContext);

  return currrentPath.split('?')[0] === path.split('?')[0] ? <>{children}</> : null;
};
