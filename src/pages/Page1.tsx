import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Page1 = (): JSX.Element => {
  const [goToPage1, setGoToPage1] = useState(false);
  return (
    <div>
      {goToPage1 ? <Redirect to="/page2" /> : null}
      <h1>Hello Page 1</h1>
      <button
        type="button"
        onClick={(): void => { setGoToPage1(true); }}
      >
        Link To Page2
      </button>
      <Link to="/page2">
        <button type="button">Link2 To Page2</button>
      </Link>

    </div>
  );
};

export default Page1;
