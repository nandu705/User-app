import React, { useState } from 'react'
import UserNavbar from './UserNavbar'

const AddUser = () => {
    const [input, changeInput] = useState(
        { ID: "", NAME: "", USERNAME: "", EMAILID: "", ADDRESS: "", PHNO: "", WEBSITE: "", COMPANYNAME: "" }
    )
    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => { console.log(input) }




    return (
        <div>
            <UserNavbar />
            <div className="container">
                <div className="row">
                    <center><h1>
                        USER APP</h1></center>
                        <h3>
                            ADD USER APP
                        </h3>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                          
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">ID</label>
                                <input type="text" className="form-control" name='ID'value={input.ID} onChange={inputHandler}/>
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">NAME</label>
                                <input type="text" className="form-control" name='NAME'value={input.NAME} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">USERNAME</label>
                                <input type="text" className="form-control" name='USERNAME'value={input.USERNAME} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">EMAIL-ID</label>
                                <input type="text" className="form-control"name='EMAILID'value={input.EMAILID} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">ADDRESS</label>
                                <textarea name='ADDRESS' id="" className="form-control" value={input.ADDRESS} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">PHONENO</label>
                                <input type="text" className="form-control" name='PHNO'value={input.PHNO} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">WEBSITE</label>
                                <input type="text" className="form-control" name='WEBSITE'value={input.WEBSITE} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">COMPANY NAME</label>
                                <input type="text" className="form-control"name='COMPANYNAME'value={input.COMPANYNAME} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success"onClick={readValues}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser