import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css'
import About from './pages/About';
import Skills from './pages/Skills';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  )
}

export default App;
