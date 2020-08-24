import React, { ReactElement, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CountApp from './components/CountApp';

function App(): ReactElement {
  const [count, setCount] = useState(0);

  if (count === 10) {
    setCount(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React INET
        </a>
        <button
          type="button"
          style={{
            padding: 20,
            background: 'red',
          }}
          onClick={(): void => {
            setCount(count + 1);
          }}
        >
          parent count
        </button>
        <h1>
          Parent
          {' '}
          {' '}
          {count}
        </h1>
        <CountApp count={count} setCount={setCount} />
      </header>
    </div>
  );
}

export default App;
