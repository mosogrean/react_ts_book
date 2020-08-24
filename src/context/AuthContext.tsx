import React from 'react';

export interface AuthContext {
  isAuth: boolean;
  userId: string;
  fullname: string;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export default React.createContext<AuthContext>({
  isAuth: false,
  userId: '',
  fullname: '',
  login: (): void => {},
  logout: () => {},
});
