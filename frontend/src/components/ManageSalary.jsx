import { useState } from "react";

function ManageSalary() {
  const [basic, setBasic] = useState("");
  const [hra, setHra] = useState(0);
  const [da, setDa] = useState(0);
  const [pf, setPf] = useState(0);
  const [net, setNet] = useState(0);

  const calculateSalary = (value) => {
    const b = Number(value);

    const hraCalc = b * 0.20;
    const daCalc = b * 0.10;
    const pfCalc = b * 0.12;
    const netCalc = b + hraCalc + daCalc - pfCalc;

    setBasic(value);
    setHra(hraCalc);
    setDa(daCalc);
    setPf(pfCalc);
    setNet(netCalc);
  };

  return (
    <div className="container">
      <h2>Manage Salary</h2>

      <input
        type="number"
        placeholder="Enter Basic Salary"
        value={basic}
        onChange={(e) => calculateSalary(e.target.value)}
      />

      <div style={{marginTop:"20px"}}>
        <p><b>Basic Salary:</b> ₹ {basic}</p>
        <p><b>HRA (20%):</b> ₹ {hra}</p>
        <p><b>DA (10%):</b> ₹ {da}</p>
        <p><b>PF (12%):</b> ₹ {pf}</p>
        <h3 style={{color:"green"}}>Net Salary: ₹ {net}</h3>
      </div>
    </div>
  );
}

export default ManageSalary;