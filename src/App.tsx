/*
 * @Author: busyzz
 * @Date: 2021-09-10 10:27:22
 * @Description:
 */
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from 'config/routes';

const App = () => {
  console.log(routes, 'routes');
  return <Router>{renderRoutes(routes)}</Router>;
};

export default App;
