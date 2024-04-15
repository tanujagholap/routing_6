// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './compo/layout/Navbar'
import Home from './compo/pages/Home'
import About from './compo/pages/About'
import Contact from './compo/pages/Contact'
import Add from './compo/pages/Add'
import Show from './compo/pages/Show'
import Update from './compo/pages/Update'
import Delete from './compo/pages/Delete'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/show' element={<Show/>}></Route>
        <Route path='/update/:userId' element={<Update/>}></Route>
        <Route path='/delete/:userId' element={<Delete/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
