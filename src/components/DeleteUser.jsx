import React from 'react'
import UserNavbar from './UserNavbar'

const DeleteUser = () => {
  return (
    <div>
      <UserNavbar/>
        <div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
            <h2>DELETE USER..</h2>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label">USER ID</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <button className="btn btn-danger">DELETE</button>
            </div>
          </div>
        </div>
      </div>
     </div> 
    </div>
  )
}

export default DeleteUser