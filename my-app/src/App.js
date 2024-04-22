import logo from './logo.svg';
import './App.css';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState'

function App() {
  return (
    <div className="App">
      <StatefulGreetingWithPrevState greeting="I am a stateful class component." name="Magda"/>
    </div>
  );
}

export default App;
