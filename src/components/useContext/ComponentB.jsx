import React, {useContext} from 'react';
import ComponentC from './ComponentC';
import { simpleContext } from '../../App';

const ComponentB = () => {
  const data = useContext(simpleContext);
  return (
    <div>
      <div>ComponentB <strong>{data.name}</strong></div>
      <ComponentC />
    </div>
  )
}

export default ComponentB