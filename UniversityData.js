import React from 'react';

const UniversityData = () => {
  const universityName = "Your University Name";
  const buildings = [
    { id: 1, name: "Building 1" },
    { id: 2, name: "Building 2" },
    { id: 3, name: "Building 3" },
    { id: 4, name: "Building 4" },
    { id: 5, name: "Building 5" },
  ];

  return (
    <div>
      <h2>{universityName}</h2>
      <h3>Available Buildings:</h3>
      <ul>
        {buildings.map(building => (
          <li key={building.id}>{building.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UniversityData;
