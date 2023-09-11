import React, { useState, useEffect } from 'react';

function ServiceHistory() {
    const [appointments, setAppointments] = useState([]);
    const [searchVin, setSearchVin] = useState('');
    const [auto, setAuto] = useState([]);


    const handleSearchVinChange = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchVin(value);
        filterAppointments(value); // Update filtered appointments as the user types
    }

    // Filter appointments based on the search
    const filterAppointments = (searchInput) => {
        const filteredAppointments = appointments.filter(appointment => {
            return appointment.vin.toLowerCase().includes(searchInput); //use includes method instead of equality comparison
        });

        setAppointments(filteredAppointments);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        filterAppointments(searchVin.toLowerCase());
    };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //         const filteredAppointments = appointments.filter(appointment => {
    //         return appointment.vin.toLowerCase() === searchVin.toLowerCase();
    //     });

    //     setAppointments(filteredAppointments);
    // };

    // get appointment data
    async function getAppointments() {
        const response = await fetch("http://localhost:8080/api/appointments/");
        if (response.ok) {
            const data = await response.json();

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

    // get automobiles data
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

    // check if VIN already exists in automobiles list
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
                {appointments.map(appointment => {
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
};

export default ServiceHistory
