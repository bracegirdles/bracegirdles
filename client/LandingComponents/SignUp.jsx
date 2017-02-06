import React from 'react';
import NavBarOut from '../NavBarOut.jsx';

const SignUp = () => (
  <div>
    <NavBarOut />
    <form className="signup-container" action="/signup" method="post">
      <div className="row">
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="step-1">
            <div className="col-md-12">
              <h3>User Info</h3>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label">Name</label>
                  <input name="name" maxLength="100" type="text" required="required" className="form-control" placeholder="Name Lastname"  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label">Username</label>
                  <input name="username" maxLength="100" type="text" required="required" className="form-control" placeholder="Enter Username"  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label">Password</label>
                  <input name="password" maxLength="10" type="password" required="required" className="form-control"  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label">Email</label>
                  <input name="email" maxLength="100" type="text"  className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="status">HR Status</label>
                  <select id="status" name="status" className="form-control" required="required">
                    <option value="na">Choose One:</option>
                    <option value="alumni">Alumnus</option>
                    <option value="student">Student</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="cohort">Cohort</label>
                  <input name="cohort" maxLength="10" type="text"  className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="control-label">GitHub</label>
                  <input name="github" maxLength="100" type="text" required="required" className="form-control" placeholder="@"  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <button id="register" className="btn btn-lg btn-primary">Register</button>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default SignUp;
