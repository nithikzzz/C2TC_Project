import React, { useState } from "react";
import axios from "axios";
import Customer from "./customer";
import "./selectbyid";

function Selectbyid() {
  const [id, setId] = useState("");
  const [posts, setPosts] = useState([]);

  const handleFetchUser = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8080/customers/${id}`)
      .then((res) => {
        setPosts([res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Customer />
      <center>
        <h2>Select By Id</h2>
      </center>
      <div className="back1">
        <div className="bg1">
          <form>
            <div className="form1">
              <input
                className="input1"
                type="text"
                placeholder="ENTER ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <button className="btn1" type="submit" onClick={handleFetchUser}>
                SELECT
              </button>
            </div>
          </form>
        </div>

        {posts.map((post) => (
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>order_Id</th>
            </tr>
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.name}</td>
              <td>{post.phoneno}</td>
              <td>{post.email}</td>
              <td>{post.order_Id}</td>
            </tr>
          </table>
        ))}
      </div>
    </>
  );
}

export default Selectbyid;
