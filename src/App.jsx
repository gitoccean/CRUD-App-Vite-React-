import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/create' element={<Create/>}></Route>      
      <Route exact path='/update/:id' element={<Update/>}></Route>
    </Routes>
    </BrowserRouter>
      )
}

export default App;