import './App.css';
import About from './components/About';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className='max-w-screen min-h-screen text-white font-lexend'>
      <Navbar></Navbar>
      <Homepage></Homepage>
      <About></About>
    </div>
  )
}

export default App
