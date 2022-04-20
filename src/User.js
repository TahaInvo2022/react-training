import React, {useContext} from 'react'
import { Appcontext } from './Context'
import useLogger from './useLogger'

const User = () => {
    const {name} = useContext(Appcontext);
    useLogger(name);
  return (
    <div>{name}</div>
  )
}

export default User