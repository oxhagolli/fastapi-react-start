import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment Me
      </button>
    </>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(<App />);