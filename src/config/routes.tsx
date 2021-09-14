import React, { Suspense, lazy, ComponentType } from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect } from 'react-router-dom';
import routesPath from './routesPath';
import HomeLayout from 'layout/homeLayout';
const SuspenseComponent = (Component: ComponentType) => (props: any) => {
  return (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );
};
/** Home */
const UserInfo = lazy(() => import('pages/userInfo'));
const Setting = lazy(() => import('pages/setting'));
const ComponentPage = lazy(() => import('pages/component'));
/** Login */
const Login = lazy(() => import('pages/login'));
const routes: Array<RouteConfig> = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to={routesPath.login} />,
  },
  {
    path: routesPath.login,
    component: SuspenseComponent(Login),
  },
  {
    path: routesPath.home.root,
    component: HomeLayout,
    routes: [
      {
        path: routesPath.home.root,
        exact: true,
        render: () => <Redirect to={routesPath.home.setting} />,
      },
      {
        path: routesPath.home.userInfo,
        component: SuspenseComponent(UserInfo),
      },
      {
        path: routesPath.home.setting,
        component: SuspenseComponent(Setting),
      },
      {
        path: routesPath.home.component,
        component: SuspenseComponent(ComponentPage),
      },
    ],
  },
];

export default routes;
