import React from 'react';
import { Link } from 'react-router-dom';

const Page0 = (): JSX.Element => (
  <div>
    <h1>Hello Page 0</h1>
    <Link to="/page1">Link To Page1</Link>
  </div>
);

export default Page0;
