import React, { FC } from 'react';
import UserProvider from './Providers/UserProvider';
import Main from './Components/Main';
import './styles/index.less';

const App: FC = () => (
  <UserProvider>
    <Main />
  </UserProvider>
);

export default App;
