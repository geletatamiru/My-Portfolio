import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import './App.css'
function App() {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  )
}

export default App;
