import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';

function App() {
  return (
    <div class="app-container">
      <Navbar />
      <p id="pheader">
        Hi I am Anurag Patil. 
      </p>
      <p id="psubheadercaps">
        Designer/Developer/Marketing Enthusiast
      </p>
      <p id="psubheader">This is my portfolio website, currently under construction.</p>
      <p id="psubheader">Contact me at <a id="a" href="mailto:anurag3103@gmail.com">anurag3103@gmail.com</a></p>
    </div>
  );
}

export default App;
