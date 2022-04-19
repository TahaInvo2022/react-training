import React, { forwardRef, useState, useImperativeHandle } from 'react'



const Button = forwardRef((props,ref) => {
    const [toggle, settoggle] = useState(true);
    useImperativeHandle(ref , () => ({
        alterToggle(){
            settoggle(!toggle)
        },
    }));
  return (
      <>
    <div>
        <button >
            Button from the Child
        </button>
        {toggle && <span>Toggle</span>}
    </div>
    </>
  )
});

export default Button