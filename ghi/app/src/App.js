import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import ListManufacturers from "./ListManufacturers";
import CreateManufacturer from "./CreateManufacturer";
import ListVehicles from "./ListVehicles";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers" element={<ListManufacturers />} />
          <Route
            path="/manufacturers/create"
            element={<CreateManufacturer />}
          />
          <Route path="/models" element={<ListVehicles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
