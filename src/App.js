import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AddShortcut from './components/AddShortcut';
import ViewShortcuts from './components/ViewShortcuts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/add" />} />
        <Route path="/add" element={<AddShortcut />} />
        <Route path="/view" element={<ViewShortcuts />} />
      </Routes>
    </Router>
  );
}

export default App;