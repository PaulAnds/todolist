import Home from './Home/Home.js';
import Header from '../shared/layout/Header.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Mi App" url="https://www.youtube.com/watch?v=mCdA4bJAGGk" />
      <Home />
    </div>
  );
}

export default App;