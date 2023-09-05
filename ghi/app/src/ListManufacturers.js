import React, { useState, useEffect } from "react";

function ListManufacturers() {
  const [manufacturers, setManufacturers] = useState([]);
  const getData = async () => {
    const url = "http://localhost:8100/api/manufacturers/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        <h1>Manufacturers</h1>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {manufacturers.map((manufacturer) => {
            return (
              <tr key={manufacturer.id}>
                <td>{manufacturer.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListManufacturers;
