import React from 'react';
import { Switch } from 'react-router-dom';

import { Route } from './Route';

import { HomePage } from '../pages/HomePage';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
  </Switch>
);
