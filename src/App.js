import './App.css';
import { db } from './config';

function App() {
  db();
  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
