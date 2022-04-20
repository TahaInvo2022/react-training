import React, {useContext} from 'react'
import { Appcontext } from './Context'



const Login = () => {

    const {setName} = useContext(Appcontext);
  return (
    <div>
        <input type="text" onChange={(e) => {
            setName(e.target.value)
        }} />
    </div>
  )
}

export default Login