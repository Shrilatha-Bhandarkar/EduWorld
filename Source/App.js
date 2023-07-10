import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Home from "./Components/Home";
import Course from "./Components/Course";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
function App(){             //function and file name same, first letter capital
  return(
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About/>}/>
    <Route path="/Course" element={<Course/>}/>
  
    </Routes>
    </BrowserRouter>
  </>
 )
} 
export default App

