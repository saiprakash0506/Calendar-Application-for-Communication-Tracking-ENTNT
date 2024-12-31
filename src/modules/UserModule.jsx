
import React, { useState } from "react";
import CalendarView from "../components/CalendarView";
import TaskModal from "../components/TaskModal";

function UserModule() {
  const [tasks, setTasks] = useState([]);
  const [companies, setCompanies] = useState([
    { name: "ABC Corp", lastFive: [], next: "2024-12-27", overdue: false },
    { name: "XYZ Ltd", lastFive: [], next: "2024-12-25", overdue: true },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const logCommunication = (task) => {
    const updatedCompanies = companies.map((company) => {
      if (company.name === task.company) {
        const updatedLastFive = [
          { type: task.type, date: task.date, notes: task.notes },
          ...company.lastFive,
        ].slice(0, 5);
        return {
          ...company,
          lastFive: updatedLastFive,
          next: task.next,
          overdue: false,
        };
      }
      return company;
    });
    setCompanies(updatedCompanies);
    setShowModal(false);
  };

  return (
    <div>
      <h1>User Module</h1>
      <h2>Dashboard</h2>
      <table className="dashboard-grid">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last Five Communications</th>
            <th>Next Scheduled Communication</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: company.overdue
                  ? "red"
                  : company.next === "2024-12-26"
                  ? "yellow"
                  : "white",
              }}
            >
              <td>{company.name}</td>
              <td>
                {company.lastFive.length > 0
                  ? company.lastFive.map((comm, i) => (
                      <span key={i} title={comm.notes}>
                        {comm.type} ({comm.date})
                      </span>
                    ))
                  : "N/A"}
              </td>
              <td>{company.next || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Notifications</h2>
      <div>
        <h3>Overdue Communications</h3>
        <ul>
          {companies
            .filter((company) => company.overdue)
            .map((company, index) => (
              <li key={index}>{company.name}</li>
            ))}
        </ul>
        <h3>Today's Communications</h3>
        <ul>
          {companies
            .filter((company) => company.next === "2024-12-26")
            .map((company, index) => (
              <li key={index}>{company.name}</li>
            ))}
        </ul>
      </div>
      <h2>Calendar View</h2>
      <CalendarView
        tasks={companies.flatMap((company) =>
          company.lastFive.map((comm) => ({
            company: company.name,
            type: comm.type,
            date: comm.date,
          }))
        )}
      />
      <button onClick={() => setShowModal(true)}>Log Communication</button>
      {showModal && (
        <TaskModal
          companies={companies.map((c) => c.name)}
          onClose={() => setShowModal(false)}
          onSave={(task) => logCommunication(task)}
        />
      )}
    </div>
  );
}

export default UserModule;
