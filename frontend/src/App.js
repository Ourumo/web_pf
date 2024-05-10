import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
  );
}