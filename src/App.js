import './App.css';
import React from 'react';
import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutToPlay from './components/Layouts/LayoutToPlay/LayoutToPlay';
import LayoutToCreate from './components/Layouts/LayoutToCreate/LayoutToCreate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/play" element={<LayoutToPlay />}/>
          <Route path="/create" element={<LayoutToCreate />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
