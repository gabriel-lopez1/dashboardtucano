import React from 'react';
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import About from "./pages/About"; 


export default function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/users' exact element={<Users/>}></Route>
        <Route path='/analytics' exact element={<Analytics/>}></Route>
        <Route path='/settings' exact element={<Settings/>}></Route>
      </Routes>
   </BrowserRouter>
   </>
  )
}
