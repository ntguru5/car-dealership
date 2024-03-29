import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import ListManufacturers from "./ListManufacturers";
import CreateManufacturer from "./CreateManufacturer";
import ListVehicles from "./ListVehicles";
import CreateVehicle from "./CreateVehicle";
import AutomobileForm from "./CreateAutomobileForm";
import AutomobilesList from "./ListAutomobiles";
import TechniciansList from "./ListTechnicians";
import TechnicianForm from "./CreateTechnicianForm";
import AddSalesperson from "./AddSalesperson";
import ListSalesPeople from "./ListSalespeople";
import AddCustomer from "./AddCustomer";
import ListCustomers from "./ListCustomers";
import AppointmentList from "./ListServiceAppointments";
import ListSales from "./ListSales";
import SaleHistory from "./SaleHistory";
import CreateSale from "./CreateSale";
import ServiceHistory from "./ListServiceHistory";
import AppointmentForm from "./CreateAppointmentForm";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers" element={<ListManufacturers />} />
          <Route
            path="/manufacturers/create/"
            element={<CreateManufacturer />}
          />
          <Route path="/models" element={<ListVehicles />} />
          <Route path="/models/create" element={<CreateVehicle />} />
          <Route path="automobiles" element={<AutomobilesList />} />
          <Route path="automobiles/create/" element={<AutomobileForm />} />
          <Route path="technicians" element={<TechniciansList />} />
          <Route path="technicians/create" element={<TechnicianForm />} />
          <Route path="appointments" element={<AppointmentList />} />
          <Route path="appointments/history" element={<ServiceHistory />} />
          <Route path="appointments/create" element={<AppointmentForm />} />
          <Route path="salespeople/" element={<ListSalesPeople />} />
          <Route path="salespeople/create/" element={<AddSalesperson />} />
          <Route path="customers/" element={<ListCustomers />} />
          <Route path="customers/create/" element={<AddCustomer />} />
          <Route path="sales/" element={<ListSales />} />
          <Route path="sales/history/" element={<SaleHistory />} />
          <Route path="sales/create/" element={<CreateSale />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
