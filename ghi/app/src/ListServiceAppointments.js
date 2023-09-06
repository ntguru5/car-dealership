import React, {useState, useEffect} from 'react';

function AppointmentList() {
    const [appointments, setAppointments] = useState([]);
    const [automobiles, setAutomobiles] = useState([]);

    async function getAppointments() {
        const response = await fetch("http://localhost:8080/api/appointments");
        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
            console.log(data.appointments)
        }
    }

    useEffect(() => {
        getAppointments();
    }, [])

    async function getAutomobiles() {
        const response = await fetch("http://localhost:8100/api/automobiles");
        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.automobiles);
            console.log(data.automobiles)
        }
    }

    useEffect(() => {
        getAutomobiles();
    }, [])

    return (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>VIN</th>
              <th>Is VIP?</th>
              <th>Customer</th>
              <th>DateTime</th>
              {/* <th>Time</th> */}
              <th>Technician</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => {
              return (
                <tr key={appointment.vin}>
                  <td>{ appointment.vin }</td>
                  <td>{ appointment.vip }</td>
                  <td>{ appointment.customer }</td>
                  <td>{ appointment.date_time }</td>
                  <td>{ appointment.technician.first_name }</td>
                  <td>{ appointment.reason }</td>
                  <td>
                    <div>
                        <button type="button" className="btn btn-danger">Cancel</button>{' '}
                        <button type="button" className="btn btn-success">Finish</button>{' '}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
}

export default AppointmentList
