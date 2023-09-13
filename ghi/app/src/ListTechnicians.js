import { useState, useEffect } from "react";

function TechniciansList() {
const [technicians, setTechnicians] = useState([]);

const getData = async () => {
    const url = 'http://localhost:8080/api/technicians/';
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        setTechnicians(data.technicians)
    }
}

useEffect(() => {
    getData()
}, []);

const handleDeleteTechnician = async (technicianId) => {
    // Send a DELETE request to delete the technician
    const deleteUrl = `http://localhost:8080/api/technicians/${technicianId}`;
    const response = await fetch(deleteUrl, {
        method: 'DELETE',
    });

    if (response.ok) {
        // If the deletion is successful, update the list of technicians
        setTechnicians((previousTechnicians) =>
            previousTechnicians.filter((technician) => technician.id !== technicianId)
        );
    }else {
        // else throw error here
        console.error("Failed to delete technician");
    }
}

return (
    <div>
        <>
        <h1>Technicians</h1>
        </>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {technicians.map(technician => {
                    return (
                        <tr key={technician.id}>
                            <td>{technician.employee_id}</td>
                            <td>{technician.first_name}</td>
                            <td>{technician.last_name}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteTechnician(technician.id)}
                                    >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
);
}

export default TechniciansList
