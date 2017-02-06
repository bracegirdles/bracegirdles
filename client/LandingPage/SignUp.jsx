import React from 'react';
import NavBar from './NavBar.jsx';

const SignUp = () => (
  <div className="signup-container">
    <NavBar />
    <div className="row">
      <div className="tab-content">
        <div role="tabpanel" className="tab-pane active" id="step-1">
          <div className="col-md-12">
            <h3>User Info</h3>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">Name</label>
                <input  maxlength="100" type="text" required="required" className="form-control" placeholder="Name Lastname"  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">Username</label>
                <input  maxlength="100" type="text" required="required" className="form-control" placeholder="Enter Username"  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">Password </label>
                <input  maxlength="10" type="text" required="required" className="form-control"  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">Email </label>
                <input maxlength="100" type="text"  className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="subject">HR Status</label>
                <select id="subject" name="subject" className="form-control" required="required">
                    <option value="na" selected="">Choose One:</option>
                    <option value="product">Alumnus</option>
                    <option value="product">Student</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="subject">Cohort</label>
                <select id="subject" name="subject" className="form-control" required="required">
                    <option value="na" selected="">Choose One:</option>
                    <option value="service">HR53</option>
                    <option value="product">HR52</option>
                    <option value="product">HR51</option>
                    <option value="product">HR50</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">GitHub</label>
                <input  maxlength="100" type="text" required="required" className="form-control" placeholder="@"  />
              </div>
              </div>
            </div>
          </div>
            <div className="col-md-12">
              <button id="register" className="btn btn-lg btn-primary">Register</button>
            </div>
        </div>
      </div>
    </div>
);

export default SignUp;