import React, {useContext} from 'react';
import { simpleContext } from '../../App';

const ComponentC = () => {
  const data = useContext(simpleContext);
  return (
    <div>ComponentC <strong>{data.name}</strong></div>
  )
}

export default ComponentC