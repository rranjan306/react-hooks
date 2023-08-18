import React, { useContext } from 'react'
import { counterContext } from '../../App';

const ComponentA = () => {
  const data = useContext(counterContext);
  return (
    <div>
      ComponentA: {data.counterCount}
      <button onClick={() => data.counterDispatch('increment')}>ComponentA +</button>
      <button onClick={() => data.counterDispatch('decrement')}>ComponentA -</button>
    </div>
  )
}

export default ComponentA