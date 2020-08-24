/* eslint-disable import/no-named-as-default */
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const auth = useContext(AuthContext);

  const handleLogin = async (): Promise<void> => {
    await auth.login('mosogrean', 'password');
  };
  const handleLogout = async (): Promise<void> => {
    await auth.logout();
  };

  return (
    <div>
      {
        !auth.isAuth ? (
          <button
            type="button"
            style={{ margin: 10, padding: 10, background: 'green' }}
            onClick={handleLogin}
          >
            Login with OneID
          </button>
        ) : null
      }
      <h3>
        name is
        {' '}
        {' '}
        {auth.fullname === '' ? 'Empty' : auth.fullname}
        .
      </h3>

      {
        auth.isAuth ? (
          <button
            type="button"
            style={{ margin: 10, padding: 10, background: 'red' }}
            onClick={handleLogout}
          >
            Logout with OneID
          </button>
        ) : null
      }

    </div>
  );
};

export default Login;
