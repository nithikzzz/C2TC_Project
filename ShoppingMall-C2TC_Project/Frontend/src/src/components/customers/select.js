import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Customer from "./customer";
import "./select.css";

function Select() {
  const [select, setSelect] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/customers")
      .then((res) => {
        console.log(res.data);
        setSelect(res.data);
      })
      .catch((err) => {
        console.error("failed", err);
      });
  }, []);

  return (
    <>
      <Customer />
      <div>
        <div>
          <center>
            <h2>Customer Details</h2>
            <div className="tab1">
              <table className="tab">
                <tr >
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Order Id</th>
                </tr>
                {select.map((items) => (
                  <tr key={items.id} >
                    <td>{items.id}</td>
                    <td>{items.name}</td>
                    <td>{items.phoneno}</td>
                    <td>{items.email}</td>
                    <td>{items.order_Id}</td>
                  </tr>
                ))}
              </table>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}
export default Select;
