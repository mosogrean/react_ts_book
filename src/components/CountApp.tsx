import React, { useState, useEffect } from 'react';

export interface CountAppProps {
  count: number;
  setCount: any;
}

const CountApp = ({ count, setCount }: CountAppProps): JSX.Element => {
  const [childCount, setChildCount] = useState(count);
  console.log('childCount', childCount);

  useEffect(() => {
    setChildCount(count - 1);
  });

  useEffect(() => {
    setChildCount(count + 1);
  }, []);

  return (
    <div>
      <h1>{childCount}</h1>
      <button
        type="button"
        style={{
          padding: 20,
          background: 'blue',
        }}
        onClick={(): void => {
          setCount(count + 1);
          setChildCount(childCount + 1);
        }}
      >
        child count
      </button>
    </div>
  );
};

export default CountApp;
