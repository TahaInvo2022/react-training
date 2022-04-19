import React, {useReducer} from 'react'

const ReducerHook = () => {

  const [state, dispatch] = useReducer(reducer, {
      name: 'taha',
      length: 4
  });  

  function reducer(state, action){
      console.log("action console ======> ", action);
      switch (action.type) {
          case 'CHANGE':
              return {name: action.payload, length: state.length}
          case 'COUNT' : 
              return {name: state.name , length: state.name.length}  
      
          default:
              return state;
      }
  }

  return (
    <div>
        <input type="text" placeholder='enter a number' onChange={(e) => {
            dispatch({type:'CHANGE', payload:e.target.value});
            dispatch({type:'COUNT'});
        }} />
        <div>
            {state.length}
        </div>
    </div>
  )
}

export default ReducerHook