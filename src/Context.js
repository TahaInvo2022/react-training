import React, {createContext, useState} from 'react'
import Login from './Login'
import User from './User'


export const Appcontext = createContext(null)

const Context = () => {
    const [name, setName] = useState('taha');
  return (
    <div>
        <Appcontext.Provider value={{name, setName}}>
        <Login/><User/>
        </Appcontext.Provider>
    </div>
  )
}

export default Context