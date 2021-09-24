import React from 'react'
import Navbar from '../../../layouts/frontend/Navbar'

function Register() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="form-group mb-3">
                    <label>Full name</label>
                    <input type="text" name="name" className="form-control" value="" />
                  </div>
                  <div className="form-group mb-3">
                    <label>Email ID</label>
                    <input type="email" name="email" className="form-control" value="" />
                  </div>
                  <div className="form-group mb-3">
                    <label>Password</label>
                    <input type="password" name="name" className="form-control" value="" />
                  </div>
                  <div className="form-group mb-3">
                    <label>Confirm Password</label>
                    <input type="text" name="name" className="form-control" value="" />
                  </div>
                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary"> Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Register
