import React, {useState} from 'react'

const PreviousState = () => {
  const [previousState, setPreviousState] = useState(1);

  const increment = () => {
    console.log('hello')
    setPreviousState((preState) => preState + 1)
  }

  const decrement = () => {
    setPreviousState((preState) => preState - 1)
  }

  return (
    <div>
      <h1>Previous State  {previousState}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default PreviousState