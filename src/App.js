import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import WorkExperience from './pages/WorkExperience';
import Education from './pages/Education';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

function App() {
  let component
  switch(window.location.pathname){
    case"/":
    component = App
      break
    case"/resume":
    component = Resume
      break
    case"/projects":
    component = Projects
      break
    case"/workexperience":
    component = WorkExperience
      break
    case"/education":
    component = Education
      break
  }
  return (
    <div class="app-container">
      <>
      <Navbar /> 
      {component}
      </>
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
