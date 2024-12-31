import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

function ReportingModule({ communications }) {
 
  const fakeData = [
    { type: "LinkedIn Post", date: "2024-12-20", overdue: false },
    { type: "Email", date: "2024-12-18", overdue: true },
    { type: "Phone Call", date: "2024-12-15", overdue: false },
    { type: "LinkedIn Post", date: "2024-12-10", overdue: true },
    { type: "Other", date: "2024-12-05", overdue: false },
  ];

  const data = communications || fakeData;

  const communicationFrequency = data.reduce((acc, comm) => {
    acc[comm.type] = (acc[comm.type] || 0) + 1;
    return acc;
  }, {});

  const overdueTrends = data.reduce((acc, comm) => {
    const date = new Date(comm.date).toLocaleDateString();
    acc[date] = (acc[date] || 0) + (comm.overdue ? 1 : 0);
    return acc;
  }, {});

  const chartDataFrequency = {
    labels: Object.keys(communicationFrequency),
    datasets: [
      {
        label: "Frequency of Communication Methods",
        data: Object.values(communicationFrequency),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
      },
    ],
  };

  const chartDataOverdue = {
    labels: Object.keys(overdueTrends),
    datasets: [
      {
        label: "Overdue Communications Over Time",
        data: Object.values(overdueTrends),
        backgroundColor: "#FF6384",
      },
    ],
  };

  return (
    <div>
      <h1>Reporting Module</h1>
      <h2>Communication Frequency Report</h2>
      {Object.keys(communicationFrequency).length > 0 ? (
        <Bar data={chartDataFrequency} />
      ) : (
        <p>No data available for communication frequency.</p>
      )}
      {/* <h2>Overdue Communication Trends</h2>
      {Object.keys(overdueTrends).length > 0 ? (
        <Pie data={chartDataOverdue} />
      ) : (
        <p>No data available for overdue trends.</p>
      )} */}
    </div>
  );
}

export default ReportingModule;
