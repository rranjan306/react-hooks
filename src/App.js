import React, { useContext, useReducer } from 'react';
import './App.css';
import Counter from './components/useState/Counter';
import PreviousState from './components/useState/PreviousState';
import ObjectState from './components/useState/ObjectState';
import ArrayState from './components/useState/ArrayState';
import EffectRender from './components/useEffect/EffectRender';
import EffectConditionaly from './components/useEffect/EffectConditionaly';
import EffectOnce from './components/useEffect/EffectOnce';
import EffectCleanUP from './components/useEffect/EffectCleanUP';
import EffectFetchAPI from './components/useEffect/EffectFetchAPI';
import SimpleReducer from './components/useReducer/SimpleReducer';
import Context from './components/useContext/Context';
import ReducefetchAPI from './components/useReducer/ReducefetchAPI';
import ReducerWithContext from './components/useReducer/ReducerWithContext';
import Callback from './components/useCallback/Callback';
import FocusInput from './components/useRef/FocusInput';
import Customhooks from './components/customHooks/customhooks';

export const simpleContext = React.createContext();
export const counterContext = React.createContext();


const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;

    case 'decrement':
      return state - 1;

    case 'reset':
      return 0;
  
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  {/* //Example of useState 
    return (
      <div className="App">
        <Counter />
        <PreviousState />
        <ObjectState />
        <ArrayState />
      </div
    )
    */
  }

  {/* //Example of useEffect 
    return (
      <div className="App">
        <EffectRender />
        <EffectConditionaly />
        <EffectOnce />
        <EffectCleanUP />
        <EffectFetchAPI />
      </div
    )
    */
  }

  {/* //Example of useContext
    return (
      <simpleContext.Provider value={{name: 'React Hooks'}}>
      <div className="App">
        <Context />
      </div>
      </simpleContext.Provider>
    )
    */
  }

  {/* //Example of useReducer
    return (
      <div className="App">
        <SimpleReducer />
        <ReducefetchAPI />

        //Example of reducer with context
        <h1>Count: {count}</h1>
        <ReducerWithContext />
      </div
    )
    */
  }

   {/* //Example of useCallback
    return (
      <div className="App">
       <Callback />
      </div
    )
    */
  }

   {/* //Example of useRef
    return (
      <div className="App">
       <FocusInput />
      </div
    )
    */
  }

  return (
      <div className="App">
       <Customhooks />
      </div>
  );
}

export default App;
