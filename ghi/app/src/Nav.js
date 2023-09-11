import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CarCar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cars
              </a>
              <ul class="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/manufacturers">
                    Manufacturers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/manufacturers/create">
                    Add a Manufacturer
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/models">
                    Models
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/models/create">
                    Add Models
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/automobiles">
                    Automobiles
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/automobiles/create">
                    Add Automobile
                  </NavLink>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/appointments">
                    Appointments
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/appointments/create">
                    Create Appointment
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/appointments/history">
                    Service History
                  </NavLink>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Employees
              </a>
              <ul class="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/technicians">
                    Technicians
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/technicians/create">
                    Add a Technician
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/salespeople">
                    Salespeople
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/salespeople/create">
                    Add Salesperson
                  </NavLink>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Customers
              </a>
              <ul class="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/customers">
                    Customers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/customers/create">
                    Add Customer
                  </NavLink>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sales
              </a>
              <ul class="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/sales">
                    Sales
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/sales/create">
                    Add a Sale
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/sales/history">
                    Sales History
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers">
                Manufacturers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers/create">
                Create a Manufacturer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models">
                Models
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models/create">
                Create a Model
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles">
                Automobiles
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles/create">
                Create an Automobile
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/technicians">
                Technicians
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technicians/create">
                Add a new Technician
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/appointments">
                Service Appointments
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointments/create">
                Create Service Appointment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointments/history">
                Service History
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople">
                Salespeople
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople/create">
                Add a Salesperson
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/customers">
                Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers/create">
                Add a Customer
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/sales">
                Sales
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/history">
                Sales History
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/create">
                Add a Sale
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
