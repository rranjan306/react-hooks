import axios from 'axios';
import React, { useState, useEffect } from 'react';

const EffectFetchAPI = () => {
  const [id, setID] = useState(1);
  const [post, setPost] = useState({});
  const [idFromButtonClicked, setIdFromButtonClicked] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => {
      console.log(res);
      setPost(res.data);
    })
    .catch((error) => {
      console.log(error)
    })
  }, [idFromButtonClicked]);

  return (
    <div>
      <h1>EffectFetchAPI</h1>
      <input type="number" value={id} onChange={e => setID(e.target.value)} />
      <button onClick={() => setIdFromButtonClicked(id)}>Fetch Post</button>
      <p>{post.id && post.title}</p>
    </div>
  )
}

export default EffectFetchAPI