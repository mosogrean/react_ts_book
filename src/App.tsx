import React, { ReactElement, useState } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import AuthContext from './context/AuthContext';

import logo from './logo.svg';
import './App.css';
import CountApp from './components/CountApp';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page0 from './pages/Page0';
import Login from './pages/Login';

function App(): ReactElement {
  const [isAuth, setIsAuth] = useState<boolean>(localStorage.getItem('is_auth') === 'success');
  const [fullname, setFullname] = useState<string>('');
  const [userId, setUserId] = useState<string>('');

  const login = (username: string, password: string): void => {
    localStorage.setItem('is_auth', 'success');
    setIsAuth(true);
    setFullname('mosogrean');
    setUserId('81183842839');
  };
  const logout = (): void => {
    localStorage.removeItem('is_auth');
    setIsAuth(false);
    setFullname('');
    setUserId('');
  };
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={{
          isAuth,
          fullname,
          userId,
          login,
          logout,
        }}
        >
          <Switch>
            <Route path="/" component={Page0} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/page1" component={Page1} exact />
            <Route path="/page2" component={Page2} exact />
            <Redirect to="/" exact />
          </Switch>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
