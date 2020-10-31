import './App.css';
import { Game } from './components/game';
import { Splash } from './components/splash'

function App() {
  return (
    <div className="App">
      <Splash/>
      <h1>Welcome to Tandem Trivia</h1>
      <Game/>
    </div>
  );
}

export default App;
