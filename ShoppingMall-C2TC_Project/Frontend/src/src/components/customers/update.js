import React, { useState } from "react";
import axios from "axios";
import Customer from "./customer";

function Update() {
  const [id, setId] = useState([]);
  const [name, setName] = useState([]);
  const [phoneno, setPhone] = useState([]);
  const [email, setMail] = useState([]);
  const [order_Id, setOrderid] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    const obj = {
      id: id,
      name: name,
      phoneno: phoneno,
      email: email,
      order_Id: order_Id,
    };
    axios
      .put(`http://localhost:8080/customers/update/${id}`, obj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Customer />
      <center>
        <h2>Update Customer Details</h2>
      </center>
      <div className="container">
        <form>
          <div className="form">
            <input
              className="input"
              type="text"
              placeholder="Id"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="Phone"
              name="phone"
              value={phoneno}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="Email"
              name="mail"
              value={email}
              onChange={(e) => setMail(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="OrderId"
              name="orderid"
              value={order_Id}
              onChange={(e) => setOrderid(e.target.value)}
            />
            <button type="submit" className="btn" onClick={submit}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
