import React from 'react'
import UserNavbar from './UserNavbar'

const SearchUser = () => {
  return (
    <div>
      <UserNavbar/>
       <div className="container">
      <div className="row">
        <h3>SEARCH USER</h3>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
           
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label">USER-NAME</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <button className="btn btn-success">SEARCH</button>
            </div>
          </div>
        </div>
      </div>
     </div>   
        
        
        
        </div>
  )
}

export default SearchUser