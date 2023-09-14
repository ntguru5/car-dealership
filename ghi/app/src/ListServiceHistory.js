import React, { useState, useEffect } from 'react';

function ServiceHistory() {
    const [allAppointments, setAllAppointments] = useState([]);
    const [filteredAppointments, setFilteredAppointments] = useState([]);
    const [searchVin, setSearchVin] = useState('');
    const [auto, setAuto] = useState([]);

    const handleSearchVinChange = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchVin(value);

        if (value === '') {
            setFilteredAppointments(allAppointments); // Reset to all appointments when search input is cleared
        } else {
            filterAppointments(value);
        }
    }

    const filterAppointments = (searchInput) => {
        const filteredAppointments = allAppointments.filter(appointment => {
            return appointment.vin.toLowerCase().includes(searchInput);
        });

        setFilteredAppointments(filteredAppointments);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        filterAppointments(searchVin.toLowerCase());
    };

    async function getAppointments() {
        const response = await fetch("http://localhost:8080/api/appointments/");
        if (response.ok) {
            const data = await response.json();

            const modifiedAppointments = data.appointments.map(appointment => {
                const dateTime = new Date(appointment.date_time);
                return {
                    ...appointment,
                    date: dateTime.toLocaleDateString(),
                    time: dateTime.toLocaleTimeString(),
                };
            });

            setAllAppointments(modifiedAppointments);
            setFilteredAppointments(modifiedAppointments); // Initialize filteredAppointments
        }
    }

    async function getAutoData() {
        const response = await fetch('http://localhost:8100/api/automobiles/');
        if (response.ok) {
            const data = await response.json();
            setAuto(data.autos);
        }
    }

    useEffect(() => {
        getAppointments();
        getAutoData();
    }, []);

    function isVip(vin) {
        for (let i = 0; i < auto.length; i++) {
            if (auto[i].vin === vin) {
                return true;
            }
        }
        return false;
    }

    return (
        <div>
            <h1>Service History</h1>
            <div className="input-group">
                <div className="form-outline">
                    <input onChange={handleSearchVinChange} value={searchVin} id="search-input" type="search" className="form-control" maxLength={17} />
                    <label className="form-label" htmlFor="search">Search by VIN</label>
                </div>
                <button id="btn btn-primary btn-sm" type="button" className="btn btn-link" onClick={handleSubmit}>
                </button>
            </div>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Is VIP</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {filteredAppointments.map(appointment => {
                    return (
                        <tr key={appointment.id}>
                            <td>{appointment.vin}</td>
                            <td>{isVip(appointment.vin) ? 'Yes' : 'No'}</td>
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
}

export default ServiceHistory;
