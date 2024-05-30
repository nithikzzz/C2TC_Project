import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/navbar/nav";
import Customer from "./components/customers/customer";
import Update from "./components/customers/update";
import Select from "./components/customers/select";
import Insert from "./components/customers/insert";
import Delete from "./components/customers/delete";
import Selectbyid from "./components/customers/selectbyid";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route path="/customer" element={<Customer />} />
              <Route path="/update" element={<Update />} />
              <Route path="/select" element={<Select />} />
              <Route path="/insert" element={<Insert />} />
              <Route path="/delete" element={<Delete />} />
              <Route path="/selectbyid" element={<Selectbyid />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
