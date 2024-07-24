import React, { useEffect, useState } from 'react';
import './ImpactMetrics.css';

const ImpactMetrics = () => {
  const [treesPlanted, setTreesPlanted] = useState(0);
  const [wasteRecycled, setWasteRecycled] = useState(0);
  const [carbonReduced, setCarbonReduced] = useState(0);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        
        const treesResponse = await fetch('/statistics-trees');
        if (!treesResponse.ok) {
          throw new Error(`error! status: ${treesResponse.status}`);
        }
        const treesData = await treesResponse.json();
        setTreesPlanted(treesData.count);

        
        const wasteResponse = await fetch('/statistics-waste');
        if (!wasteResponse.ok) {
          throw new Error(`error! status: ${wasteResponse.status}`);
        }
        const wasteData = await wasteResponse.json();
        setWasteRecycled(wasteData.count);

        
        const carbonResponse = await fetch('/statistics-carbon');
        if (!carbonResponse.ok) {
          throw new Error(`error! status: ${carbonResponse.status}`);
        }
        const carbonData = await carbonResponse.json();
        setCarbonReduced(carbonData.count);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <div className="impact-metrics">
      <h2>EcoCommunity Impact Metrics</h2>
      <div className="metric">
        <h3>Trees Planted</h3>
        <p>{treesPlanted}</p>
      </div>
      <div className="metric">
        <h3>Waste Recycled</h3>
        <p>{wasteRecycled}</p>
      </div>
      <div className="metric">
        <h3>Carbon Reduced</h3>
        <p>{carbonReduced} kg</p>
      </div>
    </div>
  );
};

export default ImpactMetrics;
