import React from 'react';
import { Link } from 'react-router-dom';

const Page2 = (): JSX.Element => (
  <div>
    <h1>Hello Page 2</h1>
    <Link to="/page0">
      <button type="button">Link To Page0</button>
    </Link>
  </div>
);

export default Page2;
