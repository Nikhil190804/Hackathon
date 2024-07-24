// src/App.js
import React from 'react';
import Navbar from './components/NavBar';
import Herosection from './components/Herosection';
import IntroductionSection from './components/IntroductionSection';
import ImpactMetrics from './components/ImpactMetrics';
import EducationalResources from './components/EducationalResources';


function App() {
  return (
    <div className="App">
    // aditya ka h
      <Navbar />
    // harhu ka h
      <Herosection/>
      <IntroductionSection/>
  // butki ka h
      <ImpactMetrics />
      <EducationalResources />

    </div>
  );
}

export default App;
