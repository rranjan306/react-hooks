import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle';
import useCounter from './useCounter';
import useInput from './useInput';

const Customhooks = () => {
  // const [count, setCount] = useState(0);
  // useDocumentTitle(count);
  // const [count, increment, decrement, reset] = useCounter(10);

  const [firstname, bindFirstName, resetFirstName] = useInput('');
  const [lastname, bindLastName, resetLastName] = useInput('');

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstname} ${lastname}`)
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <h1>CustomHooks</h1>
    
      {/*
        // Eaxmple of useDocumentTitle
        <button onClick={() => setCount(count + 1)}>Increment by 1</button> 
      */}

      {/*
        // Eaxmple of useCounter
        <p>Count: {count}</p>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => reset()}>Reset</button> 
      */}

     <form onSubmit={submitHandler}>
      <div>
          <label>FirstName:</label>
          <input type="text" {...bindFirstName} />
        </div>

        <div>
          <label>LastName:</label>
          <input type="text" {...bindLastName} />
        </div>

        <button>Submit</button>
     </form>
    </div>
  )
}

export default Customhooks