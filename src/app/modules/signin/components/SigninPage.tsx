import React, {FC} from 'react'
import './signin-page.css'

const SigninPage: FC = () => {
  return (
    <div className='d-flex flex-column flex-root'>
      <div
        className='login login-2 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white'
        id='kt_login'
      >
        <div className='login-aside order-2 d-flex flex-row-auto position-relative overflow-hidden'>
          <div className='d-flex flex-column-fluid flex-column justify-content-between py-9 px-7 py-lg-13 px-lg-35'>
            <a
              href='https://preview.keenthemes.com/metronic/demo1/custom/pages/login/login-2.html#'
              className='text-center pt-2'
            >
              <img src='/media/logos/diasprex-logo.png' className='h-45px' alt='' />
            </a>
            <div className='d-flex flex-column-fluid flex-column flex-center'>
              <div className='login-form login-signin py-11'>
                <form
                  className='form fv-plugins-bootstrap fv-plugins-framework'
                  id='kt_login_signin_form'
                  data-bitwarden-watching='1'
                >
                  <div className='text-center pb-8'>
                    <h2 className='font-weight-bolder text-dark font-size-h2 font-size-h1-lg'>
                      Sign In
                    </h2>
                    <span className='text-muted font-weight-bold font-size-h4'>
                      Or
                      <a
                        href='https://preview.keenthemes.com/metronic/demo1/custom/pages/login/login-2.html'
                        className='text-primary font-weight-bolder'
                        id='kt_login_signup'
                      >
                        Create An Account
                      </a>
                    </span>
                  </div>
                  <div className='form-group fv-plugins-icon-container'>
                    <label className='font-size-h6 font-weight-bolder text-dark'>Email</label>
                    <input
                      className='form-control form-control-solid h-auto py-7 px-6 rounded-lg'
                      type='text'
                      name='username'
                    />
                    <div className='fv-plugins-message-container' />
                  </div>
                  <div className='form-group fv-plugins-icon-container'>
                    <div className='d-flex justify-content-between mt-n5'>
                      <label className='font-size-h6 font-weight-bolder text-dark pt-5'>
                        Password
                      </label>
                      <a
                        href='javascript:;'
                        className='text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5'
                        id='kt_login_forgot'
                      >
                        Forgot Password ?
                      </a>
                    </div>
                    <input
                      className='form-control form-control-solid h-auto py-7 px-6 rounded-lg'
                      type='password'
                      name='password'
                    />
                    <div className='fv-plugins-message-container' />
                  </div>
                  <div className='text-center pt-2'>
                    <button
                      id='kt_login_signin_submit'
                      className='btn btn-dark font-weight-bolder font-size-h6 px-8 py-4 my-3'
                    >
                      Sign In
                    </button>
                  </div>
                  <input type='hidden' />
                </form>
              </div>
              {/* <div className='login-form login-forgot pt-11'>
                <form
                  className='form fv-plugins-bootstrap fv-plugins-framework'
                  id='kt_login_forgot_form'
                >
                  <div className='text-center pb-8'>
                    <h2 className='font-weight-bolder text-dark font-size-h2 font-size-h1-lg'>
                      Forgotten Password ?
                    </h2>
                    <p className='text-muted font-weight-bold font-size-h4'>
                      Enter your email to reset your password
                    </p>
                  </div>
                  <div className='form-group fv-plugins-icon-container'>
                    <input
                      className='form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6'
                      type='email'
                      placeholder='Email'
                      name='email'
                    />
                    <div className='fv-plugins-message-container' />
                  </div>
                  <div className='form-group d-flex flex-wrap flex-center pb-lg-0 pb-3'>
                    <button
                      type='button'
                      id='kt_login_forgot_submit'
                      className='btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mx-4'
                    >
                      Submit
                    </button>
                    <button
                      type='button'
                      id='kt_login_forgot_cancel'
                      className='btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mx-4'
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        </div>
        <div
          className='content order-1 d-flex flex-column w-100 pb-0'
          style={{backgroundColor: '#B1DCED'}}
        >
          <div className='d-flex flex-column justify-content-center text-center pt-lg-40 pt-md-5 pt-sm-5 px-lg-0 pt-5 px-7'>
            <h3 className='display4 font-weight-bolder my-7 text-dark' style={{color: '#986923'}}>
              Amazing Wireframes
            </h3>
            <p className='font-weight-bolder font-size-h2-md font-size-lg text-dark opacity-70'>
              User Experience &amp; Interface Design, Product Strategy
              <br />
              Web Application SaaS Solutions
            </p>
          </div>
          <div
            className='content-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center'
            style={{
              backgroundImage:
                'url(media/svg/illustrations/login-visual-2.svg)',
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export {SigninPage}
