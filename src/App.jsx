import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Timeline from './components/Timeline/Timeline.jsx';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Timeline />} />
      </Routes>
    </Router>
  );
}

export default App
