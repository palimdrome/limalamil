import './App.css';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';

function App() {

  return (
    <div className='max-w-screen min-h-screen text-[var(--color-primary-content)] bg-[var(--color-base-300)] font-jetbrains'>
      <Navbar></Navbar>
      <Homepage></Homepage>
      <div className="md:px-16 lg:px-16">
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
