import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './customer.css'
import '../navbar/nav.css'


function Customer(){

return(
    <>
    <div className='container-fluid'>
    <div className="d-flex justify-content-between">
              <Link to="/select" className="link">
                Select
              </Link>
              <Link to="/selectbyid" className="link">
                SelectById
              </Link>
              <Link to="/insert" className="link">
                Insert
              </Link>
              <Link to="/update" className="link">
                Update
              </Link>
              <Link to="/delete" className="link">
                Delete
              </Link>
            </div>
    </div>
    </>
);


}
export default Customer