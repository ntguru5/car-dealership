import React, { useState, useEffect } from 'react';

function ServiceHistory() {
    const [appointments, setAppointments] = useState([]);
    const [searchVin, setSearchVin] = useState('');

    const handleSearchVinChange = (e) => {
        setSearchVin(e.target.value);
    }

    const handleSearch = () => {
            const filteredAppointments = appointments.filter(appointment => {
            return appointment.vin === searchVin;
        });


        setAppointments(filteredAppointments);
    };

    async function getAppointments() {
        const response = await fetch("http://localhost:8080/api/appointments/");
        if (response.ok) {
            const data = await response.json();
            // setAppointments(data.appointments);
            // Modify the data to extract date and time from date_time field
            const modifiedAppointments = data.appointments.map(appointment => {
            const dateTime = new Date(appointment.date_time);
            return {
                ...appointment,
                date: dateTime.toLocaleDateString(),
                time: dateTime.toLocaleTimeString(),
            };
        });

            setAppointments(modifiedAppointments);
            }
    }
    useEffect(() => {
        getAppointments();
    }, []);

    return (
        <div>
            <h1>Service History</h1>
            <div className="input-group">
                <div className="form-outline">
                    <input onChange={handleSearchVinChange} value={searchVin} id="search-input" type="search" className="form-control" maxLength={17} />
                    <label className="form-label" htmlFor="search">Search by VIN</label>
                </div>
                <button id="search-button" type="button" className="btn btn-link" onClick={handleSearch}>
                </button>
            </div>
            <table className="table table-striped">
            <thead>
                <tr>
                <th>VIN</th>
                <th>Is VIP?</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Time</th>
                <th>Technician</th>
                <th>Reason</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {appointments.map(appointment => {
                return (
                    <tr key={appointment.vin}>
                    <td>{appointment.vin}</td>
                    <td>{appointment.vip}</td>
                    <td>{appointment.customer}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.technician.first_name}</td>
                    <td>{appointment.reason}</td>
                    <td>{appointment.status}</td>
                    </tr>
                );
                })}
            </tbody>
            </table>
        </div>
      );
};

export default ServiceHistory
