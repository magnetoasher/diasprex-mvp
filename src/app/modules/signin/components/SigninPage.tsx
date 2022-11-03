import {FC} from 'react'
import './signin-page.css'
import {useState} from 'react'
import {useOktaAuth} from '@okta/okta-react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {useLottie} from 'lottie-react'
import groovyWalkAnimation from '../../../../lf20_xvgg1zca.json'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  email: '',
  password: '',
}

const SigninPage: FC = () => {
  const [loading, setLoading] = useState(false)
  const {oktaAuth} = useOktaAuth()

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        oktaAuth
          .signInWithCredentials({username: values.email, password: values.password})
          .then((res: any) => {
            const sessionToken: string = res.sessionToken
            // sessionToken is a one-use token, so make sure this is only called once
            oktaAuth.signInWithRedirect({sessionToken})
            setLoading(false)
          })
          .catch((err) => {
            setLoading(false)
            setSubmitting(false)
            setStatus('The login detail is incorrect')
          })
      }, 1000)
    },
  })

  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
  }

  const {View} = useLottie(options)

  return (
    <div className='d-flex flex-column flex-root'>
      <div
        className='login login-2 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white'
        id='kt_login'
      >
        <div className='login-aside order-2 d-flex flex-row-auto position-relative overflow-hidden'>
          <div className='d-flex flex-column-fluid flex-column justify-content-between py-9 px-7 py-lg-13 px-lg-35'>
            <a href='/' className='text-center pt-2'>
              <img src='/media/logos/diasprex-logo.png' className='h-45px' alt='' />
            </a>
            <div className='d-flex flex-column-fluid flex-column flex-center'>
              <div className='login-form login-signin py-11'>
                <form
                  className='form fv-plugins-bootstrap fv-plugins-framework'
                  id='kt_login_signin_form'
                  // data-bitwarden-watching='1'
                  onSubmit={formik.handleSubmit}
                  noValidate
                >
                  <div className='text-center pb-8'>
                    <h2 className='font-weight-bolder text-dark font-size-h2 font-size-h1-lg'>
                      Sign In
                    </h2>
                    <span className='text-muted font-weight-bold font-size-h4'>
                      Or <br />
                      <Link to='/auth/registration' className='link-primary fw-bolder'>
                        Create an Account
                      </Link>
                    </span>
                  </div>
                  {formik.status ? (
                    <div className='mb-lg-15 alert alert-danger'>
                      <div className='alert-text font-weight-bold'>{formik.status}</div>
                    </div>
                  ) : (
                    <div className='text-info'></div>
                  )}
                  <div className='form-group fv-plugins-icon-container'>
                    <label className='font-size-h6 font-weight-bolder text-dark'>Email</label>
                    <input
                      placeholder='Email'
                      // className='form-control form-control-solid h-auto py-7 px-6 rounded-lg'
                      {...formik.getFieldProps('email')}
                      className={clsx(
                        'form-control form-control-solid h-auto py-7 px-6 rounded-lg',
                        {'is-invalid': formik.touched.email && formik.errors.email},
                        {
                          'is-valid': formik.touched.email && !formik.errors.email,
                        }
                      )}
                      type='email'
                      name='email'
                      // autoComplete='off'
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className='fv-plugins-message-container'>
                        <span role='alert'>{formik.errors.email}</span>
                      </div>
                    )}
                    <div className='fv-plugins-message-container' />
                  </div>
                  <div className='form-group fv-plugins-icon-container'>
                    <div className='d-flex justify-content-between mt-n5'>
                      <label className='font-size-h6 font-weight-bolder text-dark pt-5'>
                        Password
                      </label>
                      <Link
                        to='/auth/forgot-password'
                        className='text-primary font-size-h6 fw-bolder text-hover-primary pt-5'
                        style={{marginLeft: '5px'}}
                      >
                        Forgot Password ?
                      </Link>
                    </div>
                    <input
                      // className='form-control form-control-solid h-auto py-7 px-6 rounded-lg'
                      type='password'
                      // autoComplete='off'
                      {...formik.getFieldProps('password')}
                      className={clsx(
                        'form-control form-control-solid h-auto py-7 px-6 rounded-lg',
                        {
                          'is-invalid': formik.touched.password && formik.errors.password,
                        },
                        {
                          'is-valid': formik.touched.password && !formik.errors.password,
                        }
                      )}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{formik.errors.password}</span>
                        </div>
                      </div>
                    )}
                    <div className='fv-plugins-message-container' />
                  </div>
                  <div className='text-center pt-2'>
                    <button
                      type='submit'
                      id='kt_login_signin_submit'
                      className='btn btn-dark font-weight-bolder font-size-h6 px-8 py-4 my-3'
                      disabled={formik.isSubmitting || !formik.isValid}
                    >
                      {!loading && <span className='indicator-label'>Sign In</span>}
                      {loading && (
                        <span className='indicator-progress' style={{display: 'block'}}>
                          Please wait...
                          <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                        </span>
                      )}
                    </button>
                  </div>
                  {/* <input type='hidden' /> */}
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
          style={{backgroundColor: '#f3f4f6'}}
        >
          <div className='d-flex flex-column justify-content-center text-center pt-lg-40 pt-md-5 pt-sm-5 px-lg-0 pt-5 px-7'>
            <h3 className='display4 font-weight-bolder my-7 text-dark' style={{color: '#986923'}}>
              The Journey Starts Here
            </h3>
            <p className='font-weight-bolder font-size-h2-md font-size-lg text-dark opacity-70'>
              Join Diasprex to build a prosperous future and leave
              <br />a legacy for the next generation of Africans
            </p>
          </div>
          <div
            className='content-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center'
            // style={{
            //   backgroundImage: 'url(media/svg/illustrations/login-visual-africa_final-01.svg)',
            // }}
          >
            <>{View}</>
          </div>
        </div>
      </div>
    </div>
  )
}

export {SigninPage}
