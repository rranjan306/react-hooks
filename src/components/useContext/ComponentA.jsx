import React, {useContext} from 'react';
import { simpleContext } from '../../App';

const ComponentA = () => {
  const data = useContext(simpleContext);
  return (
    <div>
      <div>ComponentA <strong>{data.name}</strong></div>
    </div>
  )
}

export default ComponentA