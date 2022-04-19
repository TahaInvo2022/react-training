import React, { useState } from 'react'

const Hooks = () => {

    const [name, setname] = useState('taha');

  return (
    <div>
        <input type="text" value={name} onChange={(e) => {
           setname(e.target.value);
        }} />
        <div>{name}</div>
    </div>
  )
}

export default Hooks