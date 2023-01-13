import logo from './logo.svg';
import './App.css';
import { Search } from './Dashboard/Search';
import {User} from './Dashboard/AddUser/User'

function App() {
  return (
    <div className="App">
      <h1>
        Central Gaming System
      </h1>
      <User/>
    </div>
  );
}

export default App;
