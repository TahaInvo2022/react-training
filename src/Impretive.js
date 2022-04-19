import React, {useRef} from 'react'
import Button from './Button'

const Impretive = () => {
    const buttonRef = useRef(null)
  return (
    <div>
        <button onClick={() => {
            buttonRef.current.alterToggle()
        }}>Button from the Parent</button>
        <Button ref={buttonRef} />
    </div>
  )
}

export default Impretive