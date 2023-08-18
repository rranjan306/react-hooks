import React, {useState, useEffect} from 'react'

const EffectConditionaly = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log('i am updating..')
    document.title = count;
  }, [count])

  return (
    <div>
      <h1>UseEffect Conditionaly</h1>
      <p>{name}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
      <button onClick={() => setCount(count + 1)}>Count++</button>
    </div>
  )
}

export default EffectConditionaly;
