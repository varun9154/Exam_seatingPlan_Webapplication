import React from 'react';

const SeatingPlan = ({ students, roomSelection }) => {
  const { building, floor, room } = roomSelection;

  return (
    <div>
      <h2>Seating Plan</h2>
      <h3>{building}, {floor}, {room}</h3>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student.name} - {student.branch}</li>
        ))}
      </ul>
    </div>
  );
};

export default SeatingPlan;
