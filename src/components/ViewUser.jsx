import React, { useEffect, useState } from 'react'
import UserNavbar from './UserNavbar'
import axios from 'axios'

const ViewUser = () => {
  const [userData, setUserData] = useState([])

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserData(response.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <UserNavbar />
      <div className="container">
        <div className="row">
          <h3>VIEW USER</h3>
          <div className="col-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">NAME</th>
                  <th scope="col">EMAIL</th>
                  <th scope="col">PHONE</th>
                  <th scope="col">WEBSITE</th>
                  <th scope="col">COMPANY</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((value) => (
                  <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.phone}</td>
                    <td>{value.website}</td>
                    <td>{value.company?.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewUser
