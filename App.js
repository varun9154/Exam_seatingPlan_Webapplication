import React, { useState } from 'react';
import FileUpload from './FileUpload';
import RoomSelection from './RoomSelection';
import SeatingPlan from './SeatingPlan';
import UniversityData from './UniversityData'; 
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [roomSelection, setRoomSelection] = useState(null);

  const handleFileUpload = (data) => setStudents(data);
  const handleRoomSelection = (selection) => setRoomSelection(selection);

  return (
    <div className="App">
      <h1>Exam Seating Plan</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      <RoomSelection onRoomSelection={handleRoomSelection} />
      {roomSelection && students.length > 0 && (
        <SeatingPlan students={students} roomSelection={roomSelection} />
      )}
      <UniversityData /> {/* Render the university data */}
    </div>
  );
}

export default App;
