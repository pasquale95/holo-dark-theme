import React, { useState, useEffect } from 'react';

export default function Counter({ initial = 0, step = 1 }) {
  const [count, setCount] = useState(initial);
  const [label, setLabel] = useState(<em>idle</em>);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="counter" data-value={count}>
      <h1>Counter</h1>
      <button onClick={() => setCount((c) => c + step)}>+{step}</button>
      <span aria-label="current">{label}: {count}</span>
    </div>
  );
}

// Line comment: component comment
{/* JSX block comment */}
