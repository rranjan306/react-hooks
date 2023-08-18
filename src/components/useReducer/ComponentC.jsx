import React, { useContext } from 'react'
import { counterContext } from '../../App';

const ComponentC = () => {
  const data = useContext(counterContext);
  return (
    <div>
      ComponentC: {data.counterCount}
      <button onClick={() => data.counterDispatch('increment')}>ComponentC +</button>
      <button onClick={() => data.counterDispatch('decrement')}>ComponentC -</button>
    </div>
  )
}

export default ComponentC