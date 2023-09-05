import React, { useState } from "react";

function CreateManufacturer() {
  const [name, setManufacturer] = useState("");
  const handleManufacturerChange = (event) => {
    const value = event.target.value;
    setManufacturer(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.name = name;

    const postUrl = "http://localhost:8100/api/manufacturers/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    };

    const response = await fetch(postUrl, fetchConfig);
    if (response.ok) {
      const newManufacturer = await response.json();

      setManufacturer("");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a manufacturer</h1>
            <form onSubmit={handleSubmit} id="create-manufacturer">
              <div className="form-floating mb-3">
                <input
                  value={name}
                  onChange={handleManufacturerChange}
                  placeholder="Manufacturer name"
                  required
                  type="text"
                  id="manufacturer"
                  name="manufacturer"
                  className="form-control"
                />
                <label htmlFor="manufacturer">Manufacturer name...</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateManufacturer;
