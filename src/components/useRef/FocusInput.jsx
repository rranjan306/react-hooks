import React, { useEffect, useRef } from 'react'

const FocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>useRef</h1>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default FocusInput