import React, { useState } from 'react'
import UserNavbar from './UserNavbar'

const ViewUser = () => {

    const [userData, ChangesuseData] = useState([
        {"ID":"111","NAME":"SONA","USERNAME":"sona","PHNO":"13456890"},
        {"ID":"112","NAME":"SANA","USERNAME":"sana","PHNO":"12456890"},
        {"ID":"113","NAME":"SOYA","USERNAME":"soya","PHNO":"13456880"},
        {"ID":"119","NAME":"SIYA","USERNAME":"siya","PHNO":"13456890"},
        {"ID":"120","NAME":"SENA","USERNAME":"sena","PHNO":"13455890"}

    ])

  return (
    <div>
        <UserNavbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">USERNAME</th>
        <th scope="col">PHNO</th>


    </tr>
  </thead>
  <tbody>
    {userData.map(
        (value,index)=>{
            return (
                <tr>
      <th scope="row">1</th>
      <td>{value.ID}</td>
      <td>{value.NAME}</td>
      <td>{value.USERNAME}</td>
        <td>{value.PHNO}</td>


    </tr>
            )
        }
    )}


  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewUser