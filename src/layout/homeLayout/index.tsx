import React, { FC } from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { Link } from 'react-router-dom';
import routesPath from 'config/routesPath';
import styles from './index.module.scss';
const HomeLayout: FC<RouteConfigComponentProps> = ({ route, location }) => {
  const { routes } = route;
  return (
    <div className={styles.container}>
      {renderRoutes(routes)}
      <div className={styles.nav}>
        <div>
          <Link to={routesPath.home.setting}>setting</Link>
        </div>
        <div>
          <Link to={routesPath.home.userInfo}>userInfo</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
