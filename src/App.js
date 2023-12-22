import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EntryPage from './components/EntryPage';
import Registration from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<EntryPage/>}/>
        <Route exact path="/register" element={<Registration/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/quiz" element={<Quiz/>}/>
      </Routes>
    </Router>
  )
}

export default App
