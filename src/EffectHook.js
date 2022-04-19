import React, {useEffect} from 'react'

const EffectHook = () => {
    useEffect(() => {
      console.log("hello we are using useeffect")
    },[])

    // to run the use-effect once set the array empty 
    // if you want to specify against any state enter it in the array 
    // run every time remove the array

    
  return (
    <div>EffectHook</div>
  )
}

export default EffectHook