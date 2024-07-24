// src/App.js
import React from 'react';
import Navbar from './components/NavBar';
import Herosection from './components/Herosection';
import IntroductionSection from './components/IntroductionSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection/>
      <IntroductionSection/>
      {/* Other components like Hero, Introduction, */}
    </div>
  );
}

export default App;
