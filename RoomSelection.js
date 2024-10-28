import React, { useState } from 'react';

const RoomSelection = ({ onRoomSelection }) => {
  const [building, setBuilding] = useState('');
  const [floor, setFloor] = useState('');
  const [room, setRoom] = useState('');

  const handleSelection = () => {
    const selection = { building, floor, room };
    onRoomSelection(selection);
  };

  return (
    <div>
      <h2>Select Room</h2>
      <select onChange={(e) => setBuilding(e.target.value)}>
        <option value="">Select Building</option>
        <option value="Building 1">Building 1</option>
        <option value="Building 2">Building 2</option>
        <option value="Building 3">Building 3</option>
        <option value="Building 4">Building 4</option>
        <option value="Building 5">Building 5</option>
      </select>

      <select onChange={(e) => setFloor(e.target.value)}>
        <option value="">Select Floor</option>
        <option value="Floor 1">Floor 1</option>
        <option value="Floor 2">Floor 2</option>
        <option value="Floor 3">Floor 3</option>
        <option value="Floor 4">Floor 4</option>
        <option value="Floor 5">Floor 5</option>
      </select>

      <select onChange={(e) => setRoom(e.target.value)}>
        <option value="">Select Room</option>
        {[...Array(10)].map((_, index) => (
          <option key={index} value={`Room ${index + 1}`}>Room {index + 1}</option>
        ))}
      </select>

      <button onClick={handleSelection}>Confirm Selection</button>
    </div>
  );
};

export default RoomSelection;
