// src/App.js
import React from 'react';
import Navbar from './components/NavBar';
import ImpactMetrics from './components/ImpactMetrics';
import EducationalResources from './components/EducationalResources';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImpactMetrics />
      <EducationalResources />
    </div>
  );
}

export default App;
