/*
 * @Author: busyzz
 * @Date: 2021-09-10 10:27:22
 * @Description:
 */
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from 'config/routes';
import { RecoilRoot } from 'recoil';
const App = () => {
  return (
    <RecoilRoot>
      <Router>{renderRoutes(routes)}</Router>
    </RecoilRoot>
  );
};

export default App;
