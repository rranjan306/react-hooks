import React, { useEffect, useState } from 'react'

const EffectRender = () => {
const [toggle, setToggle] =  useState(true)
  
  useEffect(() => {
    console.log('useEffect updating...')
  });

  return (
    <div>
      <h1>EffectRender</h1>
      <p>{toggle ? 'True' : 'False'}</p>
      <button onClick={() => setToggle(!toggle)}>Toggle Me</button>
    </div>
  )
}

export default EffectRender