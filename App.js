import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createRootNavigator} from './src/routes';

const App = () => {
  const Layout = createAppContainer(createRootNavigator(true));
  return <Layout />;
};

export default App;
