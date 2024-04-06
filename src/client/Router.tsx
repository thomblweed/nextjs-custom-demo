import React, { ReactNode, createContext, useEffect } from 'react';

export const RouterContext = createContext({
  path: '',
  pushState: (path: string) => {},
  replaceState: (path: string) => {},
});

const hasWindow = typeof window !== 'undefined';

export const Router = ({
  initialPath,
  children,
}: {
  children: ReactNode;
  initialPath: string;
}) => {
  const [path, setPath] = React.useState<string>(
    hasWindow ? window.location.pathname : initialPath,
  );

  const pushState = (path: string) => {
    window.history.pushState({}, '', path);
    setPath(path);
  };

  const replaceState = (path: string) => {
    window.history.replaceState({}, '', path);
    setPath(path);
  };

  useEffect(() => {
    window.addEventListener('popstate', () => {
      setPath(window.location.pathname);
    });
  }, []);

  return (
    <RouterContext.Provider value={{ path, pushState, replaceState }}>
      {children}
    </RouterContext.Provider>
  );
};
