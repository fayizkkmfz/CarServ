
import './App.css';
import Foot from './footer/Foot';
import NavigBar from './head/NavigBar';
import Home from './home/Home';

function App() {
  return (
    <div className="App">
      <NavigBar/>
      <Home/>
      <Foot/>
    </div>
  );
}

export default App;
