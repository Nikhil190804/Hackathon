import React from 'react';
import './EducationalResources.css';

// Sample data for educational resources
const resources = [
  {
    id: 1,
    title: 'The Importance of Recycling',
    type: 'Article',
    url: 'https://example.com/recycling-importance',
    description: 'An in-depth article about why recycling is crucial for the environment.'
  },
  {
    id: 2,
    title: 'How to Reduce Your Carbon Footprint',
    type: 'Video',
    url: 'https://example.com/reduce-carbon-footprint',
    description: 'A video guide on various methods to lower your carbon emissions.'
  },
  {
    id: 3,
    title: 'Infographic on Plastic Waste',
    type: 'Infographic',
    url: 'https://example.com/plastic-waste-infographic',
    description: 'An infographic highlighting the impact of plastic waste on marine life.'
  }
];

const EducationalResources = () => {
  return (
    <div className="educational-resources">
      <h2>fetured educational Resources</h2>
      <div className="resources-list">
        {resources.map(resource => (
          <div key={resource.id} className="resource-item">
            <h3>{resource.title}</h3>
            <p><strong>Type:</strong> {resource.type}</p>
            <p>{resource.description}</p>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalResources;
