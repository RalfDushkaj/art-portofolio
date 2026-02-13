import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Writings from '../src/pages/Writings'
import Works from '../src/pages/Works'
import Contact from '../src/pages/Contact'

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes >
        <Route path={'/home'} element={<Home/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/writings'} element={<Writings/>}/>
        <Route path={'/works'} element={<Works/>}/>
        <Route path={'/contact'} element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
