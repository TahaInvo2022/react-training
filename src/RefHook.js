import React, {useState, useRef} from 'react'

const RefHook = () => {
    const nameInput = useRef("");
    const [name, setname] = useState("Pedro");
    const clickHandler = () => {
        if(nameInput.current.value)
        setname(nameInput.current.value);
        else
        nameInput.current.focus();
    }
  return (
    <div>
        <label>{name}</label>
        <input type="text" placeholder='enter your name' ref={nameInput} />
        <button onClick={clickHandler}>Change the name</button>
    </div>
  )
}

export default RefHook