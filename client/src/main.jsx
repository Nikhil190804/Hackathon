import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/home';
import Event from './components/Event';
import EducationalResources from './components/EducationalResources';
import ImpactMetrics from './components/ImpactMetrics';
import IntroductionSection from './components/IntroductionSection';

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route path="home" element={<Home />} />
        <Route path="events" element={<Event />} />
        <Route path="impact" element={< ImpactMetrics />} />
        <Route path="resources" element={< EducationalResources />} />
        <Route path="about" element={< IntroductionSection />} />
        {/* Add other routes here if needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
