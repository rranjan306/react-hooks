import React, { useEffect, useState } from 'react';

const EffectOnce = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePoints = (e) => {
    console.log('mouse moving')
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    console.log('WOW! i am updating only once :)');
    window.addEventListener('mousemove', logMousePoints);

    return () => {
      console.log('component unmounted');
      window.removeEventListener('mousemove', logMousePoints);
    }
  }, []);

  return (
    <div>
      <h1>EffectOnce</h1>
      <p>X: {x}</p>
      <p>Y: {y}</p>
    </div>
  )
}

export default EffectOnce