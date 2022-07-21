import React from 'react';
import { Navigate } from 'react-router-dom';

export interface RedirectIfBlankProps {
  data: string[] | number[];
}

interface Config {
  redirectCondition: (props: RedirectIfBlankProps) => boolean;
  redirectTo: string;
}

export default function withRedirectIfBlank<T>(config: Config) {
  return function (Component: React.ComponentType<T & RedirectIfBlankProps>) {
    return function withRedirectIfBlank(props: T & RedirectIfBlankProps) {
      const { data } = props;
      const { redirectCondition, redirectTo } = config;
      const shouldRedirect = redirectCondition({ data });

      if (shouldRedirect) {
        return <Navigate to={redirectTo} />;
      }
      return <Component {...props} />;
    };
  };
}
