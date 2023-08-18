import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount]  = useState(0);
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => setCount(count + 1)}>IncreMent Me</button>
      <button onClick={() => setCount(count - 1)}>Decrement Me</button>
    </div>
  )
}

export default Counter;
