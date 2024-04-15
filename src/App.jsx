import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {

  return (
    <div className='max-w-screen min-h-screen text-white font-lexend'>
      <Navbar></Navbar>
      <Homepage></Homepage>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
