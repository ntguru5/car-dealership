import React, { useEffect, useState } from "react";

function ListSalesPeople() {
  const [salespeople, setSalesPeople] = useState([]);
  const getData = async () => {
    const url = "http://localhost:8090/api/salespeople/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setSalesPeople(data.salespeople);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Salespeople</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {salespeople.map((salesPerson) => {
            return (
              <tr key={salesPerson.id}>
                <td>{salesPerson.employee_id}</td>
                <td>{salesPerson.first_name}</td>
                <td>{salesPerson.last_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListSalesPeople;
