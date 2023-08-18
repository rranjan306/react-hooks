import axios from 'axios';
import React, { useEffect, useReducer } from 'react';

const initialState = {
  loading: true,
  data: {},
  error: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        data: action.payload,
        error: null
      }
    
    case 'FETCH_ERROR':
      return {
        loading: false,
        data: {},
        error: 'something went wrong !'
      }
  
    default:
      return state
  }
}

const ReducefetchAPI = () => {
  const [state, dispatch ] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => {
      dispatch({type: 'FETCH_SUCCESS', payload: res.data});
    })
    .catch(error => {
      dispatch({type: 'FETCH_ERROR'});
    })
  }, []);

  return (
    <div>
      <h1>useReduce with Axios</h1>
      {state.loading ? 'loading......' : state.data.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default ReducefetchAPI