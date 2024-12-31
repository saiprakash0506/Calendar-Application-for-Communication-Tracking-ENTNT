import React from "react";

function CalendarView({ tasks }) {
  return (
    <div>
      <h2>Calendar</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.date} - {task.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default CalendarView;