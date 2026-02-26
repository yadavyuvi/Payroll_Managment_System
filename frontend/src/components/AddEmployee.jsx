import { useState, useEffect } from "react";
import axios from "axios";

function AddEmployee() {

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    hireDate: "",
    basicSalary: "",
    status: "",
    departmentId: ""
  });

  const [departments, setDepartments] = useState([]);

  // 🔹 Load departments
  useEffect(() => {
    axios.get("http://localhost:8080/api/departments")
      .then(res => setDepartments(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/employees", {
        ...employee,
        department: { id: Number(employee.departmentId) }
      });

      alert("Employee Added!");
    } catch (err) {
      alert("Error");
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name" onChange={handleChange}/>
        <input name="lastName" placeholder="Last Name" onChange={handleChange}/>
        <input name="email" placeholder="Email" onChange={handleChange}/>
        <input name="phone" placeholder="Phone" onChange={handleChange}/>
        <input name="hireDate" type="date" onChange={handleChange}/>
        <input name="basicSalary" placeholder="Salary" onChange={handleChange}/>
        <input name="status" placeholder="Status" onChange={handleChange}/>

        {/* 🔹 Department Dropdown */}
        <select name="departmentId" onChange={handleChange} required>
          <option value="">Select Department</option>
          {departments.map(d => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>

        <button>Add</button>
      </form>
    </div>
  );
}

export default AddEmployee;