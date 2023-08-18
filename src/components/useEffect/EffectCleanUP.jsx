import React, { useEffect, useState } from 'react';
import EffectOnce from './EffectOnce';

const EffectCleanUP = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <h1>Effect Clean Up</h1>
      {display && <EffectOnce />}
      <button onClick={() => setDisplay(!display)}>Toggle Me</button>
    </div>
  )
}

export default EffectCleanUP;
