import React, { useState } from 'react'

const ArrayState = () => {
  let count = 0;
  const [person, setPerson] =  useState([{name: 'deepak', age: 25, hobbies: ['cricket', 'singing']}]);

  const addHobbies = () => {
    let newperson = [...person];
    for(let p of newperson) {
      p.hobbies.push('new');
    }

    setPerson(newperson)
  };

  return (
    <div>
      <h2>Person Details:</h2>
      {person.map((p, index) => (
        <div key={index}>
          <p>{p.name}</p>
          <p>{p.age}</p>
          <ul>
            {p.hobbies.map((hobby, index2) => (
              <li key={index2}>{hobby}</li>
            ))}
          </ul>
        </div>
      ))}

      <button onClick={addHobbies}>Add Hobbies</button>
    </div>
  )
}

export default ArrayState
