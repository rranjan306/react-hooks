import React from 'react'

const Title = () => {
  console.log('Title .....');
  return (
    <div>
      <h1>useCallback</h1>
    </div>
  )
}

export default React.memo(Title);