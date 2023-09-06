import React, { useEffect, useState } from "react";

function CreateVehicle() {
  const [manufacturers, setManufacturers] = useState([]);
  const [name, setName] = useState("");
  const handleModelChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const [picture_url, setPicture] = useState("");
  const handlePictureChange = (event) => {
    const value = event.target.value;
    setPicture(value);
  };
  const [manufacturer, setManufacturer] = useState("");
  const handleManufacturerChange = (event) => {
    const value = event.target.value;
    setManufacturer(value);
  };

  const fetchData = async () => {
    const url = "http://localhost:8100/api/manufacturers/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.name = name;
    data.picture_url = picture_url;
    data.manufacturer_id = manufacturer;
    console.log(data);

    const postUrl = "http://localhost:8100/api/models/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    };

    const response = await fetch(postUrl, fetchConfig);
    if (response.ok) {
      const newModel = await response.json();

      setName("");
      setPicture("");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a manufacturer</h1>
            <form onSubmit={handleSubmit} id="create-model">
              <div className="form-floating mb-3">
                <input
                  value={name}
                  onChange={handleModelChange}
                  placeholder="Model name"
                  required
                  type="text"
                  id="model"
                  name="model"
                  className="form-control"
                />
                <label htmlFor="model">Model name...</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={picture_url}
                  onChange={handlePictureChange}
                  placeholder="Picture URL"
                  required
                  type="text"
                  id="picture"
                  name="picture"
                  className="form-control"
                />
                <label htmlFor="picture">Picture URL...</label>
              </div>
              <div className="mb-3">
                <select
                  value={manufacturer}
                  onChange={handleManufacturerChange}
                  required
                  name="manufacturer"
                  id="manufacturer"
                  className="form-select"
                >
                  <option>Choose a manufacturer</option>
                  {manufacturers.map((manufacturer) => {
                    return (
                      <option key={manufacturer.id} value={manufacturer.id}>
                        {manufacturer.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateVehicle;
