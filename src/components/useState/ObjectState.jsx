import React, {useState} from 'react'

const ObjectState = () => {
  const [person, setPerson] = useState({
    firstname: 'Deepak',
    lastname: 'ranjan',
    age: 25
  });

  return (
    <div>
      <h2>Person Details:</h2>
      <p>FirstName: {person.firstname}</p>
      <p>LastName: {person.lastname}</p>
      <p>Age: {person.age}</p>
      <button onClick={() => setPerson({...person, age: person.age + 1})}>Age+</button>
    </div>
  )
}

export default ObjectState