import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Click me
      </button>
    </div>
  );
};

export default App;