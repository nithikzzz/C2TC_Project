import React, { useState } from "react";
import axios from "axios";
import Customer from "./customer";
import "./delete.css";

function Delete() {
  const [id, setIdToDelete] = useState("");

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/customers/delete/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Customer />
      <center>
        <h2>Delete Customer Details</h2>
      </center>
      <div className="back">
        <div class="bg1">
          <form>
            <div class="form1">
              <input
                className="input1"
                type="text"
                placeholder="ENTER ID"
                value={id}
                onChange={(e) => setIdToDelete(e.target.value)}
              />
              <button className="btn1" type="submit" onClick={handleDelete}>
                DELETE
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Delete;
