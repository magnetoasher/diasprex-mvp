import React from "react";
import { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Button } from "antd";
export const Account = () => {
  const [changeEmail, setChangeEmail] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [accountType, setAccountType] = useState(localStorage.getItem("userType"));
  const [openSweetAlert, setOpenSweetAlert] = useState(false);
  const onConfirm = () => {

  }
  const onCancel = () => {
    setOpenSweetAlert(false)
  }

  return (
    <div className="card mb-5 mb-xl-10">
      <div className="card-header border-0 cursor-pointer" role="button">
        <div className="card-title m-0">
          <h3 className="fw-bolder m-0">Sign-in Method</h3>
        </div>
      </div>

      <div>
        <div className="card-body border-top p-9">
          <div className="d-flex flex-wrap align-items-center">
            {!changeEmail && (
              <div>
                <div className="fs-6 fw-bolder mb-1">Email Address</div>
                <div className="fw-bold text-gray-600">
                  support@keenthemes.com
                </div>
              </div>
            )}
            {changeEmail && (
              <div className="flex-row-fluid">
                <form
                  className="form"
                // novalidate="novalidate"
                >
                  <div className="row mb-6">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                      <div className="fv-row mb-0">
                        <label
                          htmlFor="emailaddress"
                          className="form-label fs-6 fw-bolder mb-3"
                        >
                          Enter New Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg form-control-solid"
                          id="emailaddress"
                          placeholder="Email Address"
                          name="emailaddress"
                          value="support@keenthemes.com"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="fv-row mb-0">
                        <label
                          htmlFor="confirmemailpassword"
                          className="form-label fs-6 fw-bolder mb-3"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-lg form-control-solid"
                          name="confirmemailpassword"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button type="button" className="btn btn-primary me-2 px-6">
                      Update Email
                    </button>
                    <button
                      id="kt_signin_cancel"
                      type="button"
                      className="btn btn-color-gray-700 btn-active-light-primary px-6"
                      onClick={() => {
                        setChangeEmail(false);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
            {!changeEmail && (
              <div id="kt_signin_email_button" className="ms-auto">
                <button
                  className="btn btn-light btn-active-light-primary"
                  onClick={() => {
                    setChangeEmail(true);
                  }}
                >
                  Change Email
                </button>
              </div>
            )}
          </div>

          <div className="separator separator-dashed my-6"></div>

          <div className="d-flex flex-wrap align-items-center mb-10">
            {!changePassword && (
              <div id="kt_signin_password">
                <div className="fs-6 fw-bolder mb-1">Password</div>
                <div className="fw-bold text-gray-600">************</div>
              </div>
            )}
            <div id="kt_signin_password_edit" className="flex-row-fluid">
              <form
                id="kt_signin_change_password"
                className="form"
              // novalidate="novalidate"
              >
                {changePassword && (
                  <div className="row mb-1">
                    <div className="col-lg-4">
                      <div className="fv-row mb-0">
                        <label
                          htmlFor="currentpassword"
                          className="form-label fs-6 fw-bolder mb-3"
                        >
                          Current Password
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-lg form-control-solid"
                          name="currentpassword"
                          id="currentpassword"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="fv-row mb-0">
                        <label
                          htmlFor="newpassword"
                          className="form-label fs-6 fw-bolder mb-3"
                        >
                          New Password
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-lg form-control-solid"
                          name="newpassword"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="fv-row mb-0">
                        <label
                          htmlFor="confirmpassword"
                          className="form-label fs-6 fw-bolder mb-3"
                        >
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-lg form-control-solid"
                          name="confirmpassword"
                        />
                      </div>
                    </div>
                    <div className="form-text mb-5">
                      Password must be at least 8 character and contain symbols
                    </div>
                  </div>
                )}

                {changePassword && (
                  <div className="d-flex">
                    <button type="button" className="btn btn-primary me-2 px-6">
                      Update Password
                    </button>
                    <button
                      type="button"
                      className="btn btn-color-gray-700 btn-active-light-primary px-6"
                      onClick={() => {
                        setChangePassword(false);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </form>
            </div>
            {!changePassword && (
              <div className="ms-auto">
                <button
                  className="btn btn-light btn-active-light-primary"
                  onClick={() => {
                    setChangePassword(true);
                  }}
                >
                  Reset Password
                </button>
              </div>
            )}
          </div>


          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <label style={{
                fontWeight: 600,
                fontSize: "14px"
              }}>
                Deactivate Account
              </label>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-danger btn-active-light-primary px-6"
                onClick={() => {
                  setOpenSweetAlert(true)
                }}

              >
                Deactivate Account
              </button>
            </div>

          </div>
        </div>
      </div>
      <SweetAlert
        title={"Account Deactivation"}
        onConfirm={onConfirm}
        onCancel={onCancel}
        showCancel={true}
        show={openSweetAlert}
      >

        <div>
          {accountType !== "basic" ? (
            <h3>
              Please contact the admin at{" "}
              <a className='btn btn-link' href='#'>admin@diasprex.com </a>{" "}
              to deactivate your account.
            </h3>
          ) : (
            <h3>
              Are you sure to permanently delete your account?
            </h3>

          )

          }

        </div>
      </SweetAlert>
    </div >
  );
};
