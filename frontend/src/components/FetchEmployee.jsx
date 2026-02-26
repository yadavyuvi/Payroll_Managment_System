import { useState } from "react";
import axios from "axios";

function FetchEmployee() {
  const [id, setId] = useState("");
  const [employee, setEmployee] = useState(null);

  const fetchEmployee = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/employees/${id}`
      );
      setEmployee(res.data);
    } catch (error) {
      alert("Employee not found");
    }
  };

  return (
    <div className="container">
      <h2>Fetch Employee</h2>

      <input
        placeholder="Enter Employee ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={fetchEmployee}>Fetch</button>

      {employee && (
        <div style={{ marginTop: "20px" }}>
          <p><b>Name:</b> {employee.firstName} {employee.lastName}</p>
          <p><b>Email:</b> {employee.email}</p>
          <p><b>Phone:</b> {employee.phone}</p>
          <p><b>Salary:</b> {employee.basicSalary}</p>
          <p><b>Status:</b> {employee.status}</p>
          <p><b>Department:</b> {employee.department?.name}</p>
        </div>
      )}
    </div>
  );
}

export default FetchEmployee;