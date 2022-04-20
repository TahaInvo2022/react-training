
import './App.css';
import Dynamic from "./dynamicText";
import ClaCom from './classCom';
import Hooks from './Hooks'
import ReducerHook from './ReducerHook'
import Effect from './EffectHook'
import RefHook from './RefHook'
import Impretive from './Impretive'
import Context from './Context'

function App() {
  return (
    <div className="App">
      <Dynamic name='taha'/>
      <ClaCom classProp='shahid'/>
      <Hooks/>
      <ReducerHook/>
      <Effect />
      <RefHook />
      <Impretive />
      <Context/>
    </div>


  );
}

export default App;
