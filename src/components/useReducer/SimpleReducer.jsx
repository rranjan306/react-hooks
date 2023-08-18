import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;

    case 'decrement':
      return state - 1
    
    case 'reset':
      return 0
  
    default:
      return state;
  }
}

const SimpleReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>SimpleReducer</h1>
      <p>count: {count}</p>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset Me</button>
    </div>
  )
}

export default SimpleReducer
