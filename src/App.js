
import './App.css';
import Dynamic from "./dynamicText";
import ClaCom from './classCom';
import Hooks from './Hooks'
import ReducerHook from './ReducerHook'
import Effect from './EffectHook'
import RefHook from './RefHook'
import Impretive from './Impretive'

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
    </div>

  );
}

export default App;
