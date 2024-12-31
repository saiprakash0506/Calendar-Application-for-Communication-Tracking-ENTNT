import React, { useState } from "react";

function TaskModal({ onClose, onSave, companies }) {
  const [type, setType] = useState("LinkedIn Post");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [company, setCompany] = useState(companies[0] || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 14); // Example: 2-week periodicity
    onSave({
      type,
      date,
      notes,
      company,
      next: nextDate.toISOString().split("T")[0],
    });
  };

  return (
    <div className="modal">
      <h2>Log Communication</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Company:
          <select value={company} onChange={(e) => setCompany(e.target.value)}>
            {companies.map((c, index) => (
              <option key={index} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="LinkedIn Post">LinkedIn Post</option>
            <option value="Email">Email</option>
            <option value="Phone Call">Phone Call</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Notes:
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default TaskModal;
