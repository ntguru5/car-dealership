import React, { useEffect, useState } from 'react';

function AppointmentForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [vin, setVin] = useState('');
  const [customer, setCustomer] = useState('');
  const [technician, setTechnician] = useState('');
  const [technicians, setTechnicians] = useState([]);

  // onChange handlers for each input
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleVinChange = (event) => {
    setVin(event.target.value);
  };

  const handleCustomerChange = (event) => {
    setCustomer(event.target.value);
  };

  const handleTechnicianChange = (event) => {
    setTechnician(event.target.value);
  };


  // fetch the data for the technician dropdown
  const fetchData = async () => {
    const technicianUrl = 'http://localhost:8080/api/technicians/';

    const response = await fetch(technicianUrl);

    if (response.ok) {
      const data = await response.json();
      setTechnicians(data.technicians);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Combine date and time into a single dateTime string, separated with "T" ISO 8601 format
    const dateTime = `${date}T${time}`;

    const data = {
      date_time: dateTime,
      reason,
      vin,
      customer,
      technician,
    };

    const appointmentUrl = 'http://localhost:8080/api/appointments/';
    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const appointment = await fetch(appointmentUrl, fetchConfig);
    if (appointment.ok) {
      // Clear the form fields
      setDate('');
      setTime('');
      setReason('');
      setVin('');
      setCustomer('');
      setTechnician('');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a Service Appointment</h1>
          <form onSubmit={handleSubmit} id="create-appointment">
            <div className="form-floating mb-3">
              <input
                onChange={handleVinChange}
                value={vin}
                placeholder="vin"
                required
                type="text"
                maxLength={17}
                name="vin"
                id="vin"
                className="form-control"
              />
              <label htmlFor="vin">Automobile VIN</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleCustomerChange}
                value={customer}
                placeholder="customer"
                required
                type="text"
                name="customer"
                id="customer"
                className="form-control"
              />
              <label htmlFor="customer">Customer</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleDateChange}
                value={date}
                placeholder="date"
                name="date"
                id="date"
                type="date"
                className="form-control"
              />
              <label htmlFor="date">Date</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleTimeChange}
                value={time}
                placeholder="time"
                name="time"
                id="time"
                type="time"
                className="form-control"
              />
              <label htmlFor="time">Time</label>
            </div>
            <div className="mb-3">
              <select
                onChange={handleTechnicianChange}
                required
                name="technician"
                id="technician"
                className="form-select"
              >
                <option value="">Choose a Technician</option>
                {technicians.map((technician) => {
                  return (
                    <option
                      key={technician.employee_id}
                      value={technician.employee_id}
                    >
                      {technician.first_name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={handleReasonChange}
                value={reason}
                placeholder="reason"
                type="text"
                name="reason"
                id="reason"
                className="form-control"
              />
              <label htmlFor="reason">Reason</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppointmentForm;
