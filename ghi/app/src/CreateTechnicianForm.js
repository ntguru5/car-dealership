import React, {useState, useEffect} from 'react';

function TechnicianForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [employeeId, setEmployeeId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.first_name = firstName;
        data.last_name = lastName;
        data.employee_id = employeeId;

        const technicianUrl = "http://localhost:8080/api/technicians/";

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const technician = await fetch(technicianUrl, fetchConfig);
        if (technician.ok){
                setFirstName('');
                setLastName('');
                setEmployeeId('');
            };
      }

      const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
      }
      const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);
      }
      const handleEmployeeIdChange = (event) => {
        const value = event.target.value;
        setEmployeeId(value);
      }

      return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add A Technician</h1>
            <form onSubmit={handleSubmit} id="add-technician">
              <div className="form-floating mb-3">
                <input onChange={handleFirstNameChange} value={firstName} placeholder="First name" required type="text" name="first_name" id="first_name" className="form-control"/>
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleLastNameChange} value={lastName} placeholder="Last name" required type="text" name="last_name" id="last_name" className="form-control"/>
                <label htmlFor="last_name">Last Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleEmployeeIdChange} value={employeeId} placeholder="Employee ID" type="text" name="employee_id" id="employee_id" className="form-control"/>
                <label htmlFor="employee_id">Employee ID</label>
              </div>
              <button className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default TechnicianForm
