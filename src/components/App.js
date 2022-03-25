import Home from './Home/Home.js';
import Header from '../shared/layout/Header.js';
import Footer from '../shared/layout/Footer.js';
import Content from '../shared/layout/Content.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Header" url="https://www.youtube.com/watch?v=mCdA4bJAGGk" />
      <Content>
        <Home />
      </Content>
      <Footer />
    </div>
  );
}

export default App;