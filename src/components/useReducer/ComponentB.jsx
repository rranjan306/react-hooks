import React, { useContext } from 'react'
import { counterContext } from '../../App';

const ComponentB = () => {
  const data = useContext(counterContext);
  return (
    <div>
      ComponentB: {data.counterCount}
      <button onClick={() => data.counterDispatch('increment')}>ComponentB +</button>
      <button onClick={() => data.counterDispatch('decrement')}>ComponentB -</button>
    </div>
  )
}

export default ComponentB