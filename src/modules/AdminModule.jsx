import React, { useState } from "react";

function AdminModule() {
  const [companies, setCompanies] = useState([]);
  const [methods, setMethods] = useState([
    { name: "LinkedIn Post", description: "Post on LinkedIn", sequence: 1, mandatory: true },
    { name: "LinkedIn Message", description: "Send a LinkedIn message", sequence: 2, mandatory: true },
    { name: "Email", description: "Send an email", sequence: 3, mandatory: true },
    { name: "Phone Call", description: "Make a phone call", sequence: 4, mandatory: false },
    { name: "Other", description: "Other communication methods", sequence: 5, mandatory: false }
  ]);

  const addCompany = (company) => {
    setCompanies([...companies, company]);
  };

  const editCompany = (index, updatedCompany) => {
    const updatedCompanies = companies.map((company, i) =>
      i === index ? updatedCompany : company
    );
    setCompanies(updatedCompanies);
  };

  const deleteCompany = (index) => {
    setCompanies(companies.filter((_, i) => i !== index));
  };

  const addCommunicationMethod = (method) => {
    setMethods([...methods, method]);
  };

  const editCommunicationMethod = (index, updatedMethod) => {
    const updatedMethods = methods.map((method, i) =>
      i === index ? updatedMethod : method
    );
    setMethods(updatedMethods);
  };

  const deleteCommunicationMethod = (index) => {
    setMethods(methods.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Admin Module</h1>
      <h2>Company Management</h2>
      <button onClick={() => addCompany({ name: "New Company", location: "", linkedin: "", emails: [], phoneNumbers: [], comments: "", periodicity: "2 weeks" })}>Add Company</button>
      <ul>
        {companies.map((company, index) => (
          <li key={index}>
            {company.name}
            <button onClick={() => editCompany(index, { ...company, name: prompt("Enter new name:", company.name) || company.name })}>Edit</button>
            <button onClick={() => deleteCompany(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Communication Methods</h2>
      <button onClick={() => addCommunicationMethod({ name: prompt("Method name:"), description: prompt("Description:"), sequence: methods.length + 1, mandatory: false })}>Add Method</button>
      <ul>
        {methods.map((method, index) => (
          <li key={index}>
            {method.name} - {method.description}
            <button onClick={() => editCommunicationMethod(index, { ...method, name: prompt("New name:", method.name) || method.name, description: prompt("New description:", method.description) || method.description })}>Edit</button>
            <button onClick={() => deleteCommunicationMethod(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminModule;
