import React, { useState } from "react";

function AddCustomer() {
  const [first_name, setFirst] = useState("");
  const handleFirstChange = (event) => {
    const value = event.target.value;
    setFirst(value);
  };
  const [last_name, setLast] = useState("");
  const handleLastChange = (event) => {
    const value = event.target.value;
    setLast(value);
  };
  const [address, setAddress] = useState("");
  const handleAddressChange = (event) => {
    const value = event.target.value;
    setAddress(value);
  };
  const [phone_number, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.first_name = first_name;
    data.last_name = last_name;
    data.address = address;
    data.phone_number = phone_number;

    const postUrl = "http://localhost:8090/api/customers/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    };

    const response = await fetch(postUrl, fetchConfig);
    if (response.ok) {
      const newCustomer = await response.json();

      setFirst("");
      setLast("");
      setAddress("");
      setPhoneNumber("");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Salesperson</h1>
            <form onSubmit={handleSubmit} id="create-model">
              <div className="form-floating mb-3">
                <input
                  value={first_name}
                  onChange={handleFirstChange}
                  placeholder="First name"
                  required
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="form-control"
                />
                <label htmlFor="first_name">First name...</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={last_name}
                  onChange={handleLastChange}
                  placeholder="Last name"
                  required
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="form-control"
                />
                <label htmlFor="last_name">Last name...</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={address}
                  onChange={handleAddressChange}
                  placeholder="Address"
                  required
                  type="text"
                  id="address"
                  name="address"
                  className="form-control"
                />
                <label htmlFor="address">Address...</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={phone_number}
                  onChange={handlePhoneNumberChange}
                  placeholder="Phone Number"
                  required
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  className="form-control"
                />
                <label htmlFor="phone_number">Phone number...</label>
              </div>

              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;
