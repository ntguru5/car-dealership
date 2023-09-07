import React, {useState, useEffect} from 'react';

function AppointmentList() {
    const [appointments, setAppointments] = useState([]);
    // const [automobiles, setAutomobiles] = useState([]);

    async function getAppointments() {
        const response = await fetch("http://localhost:8080/api/appointments");
        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
            console.log(data.appointments)
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
    }, [])

    // async function getAutomobiles() {
    //     const response = await fetch("http://localhost:8100/api/automobiles");
    //     if (response.ok) {
    //         const data = await response.json();
    //         setAutomobiles(data.automobiles);
    //     }
    // }

    // useEffect(() => {
    //     getAutomobiles();
    // }, [])


    async function handleCancelAppointment(id) {
      const appointmentUrl =`http://localhost:8080/api/appointments/${id}/cancel`;
      const fetchConfig = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        }
      };

      const response = await fetch(appointmentUrl, fetchConfig);
      if (response.ok) {

        window.location.reload();
      }
  }

  async function handleFinishAppointment(id) {
      const appointmentUrl =`http://localhost:8080/api/appointments/${id}/finish`;
      const fetchConfig = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        }
      };

      const response = await fetch(appointmentUrl, fetchConfig);
      if (response.ok) {

        window.location.reload();
      }
  }


    return (
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
                  <td>
                    <div>
                        <button onClick={() => handleCancelAppointment(appointment.id)} type="button" className="btn btn-danger">Cancel</button>{' '}
                        <button onClick={() => handleFinishAppointment(appointment.id)} type="button" className="btn btn-success">Finish</button>{' '}
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
