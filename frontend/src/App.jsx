import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'


import Test from './pages/test'

function App() {

  return(
    <>
      <Navbar />
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="/login" element={<Login />}/>
        <Route path = "/signup" element={<Signup />}/>
        <Route path = "/test" element = {<Test />}/>
      </Routes>
    </>
  );
}

export default App
