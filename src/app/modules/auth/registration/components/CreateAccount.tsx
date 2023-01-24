// @ts-nocheck comment
import React, {FC, useContext, useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Step1} from './steps/Step1'
import {PhoneVerification} from './steps/phoneverification'
import {Step3} from './steps/Step3'
import {Step4} from './steps/Step4'
import {Step5} from './steps/Step5'
import AccountVerification from './steps/AccountVerification'
import {StepperComponent} from '../../../../../_metronic/assets/ts/components'
import {Formik, Form, FormikActions, FormikValues} from 'formik'
import './hide-stepper.css'
import {
  IProfile,
  createAccountSchemas,
  inits,
  SubscriptionPackage,
} from './CreateAccountWizardHelper'
import SweetAlert from 'react-bootstrap-sweetalert'
import {useSelector} from 'react-redux'
// import SubscriptionPlans from './steps/SubscriptionPlans'
import SubscriptionPlans3 from './SubscriptionComponet/SubscriptionPlans3'
import {PhoneVerification2} from './steps/phoneverification2'
import moment from 'moment'
import {useOktaAuth} from '@okta/okta-react'
import {createUserProfileAPI} from '../../../profile/redux/ProfileAPI'
import {getUniqueDPXId} from '../../../../../_metronic/assets/ts/_utils'
import axios from 'axios'
import {profileContext} from '../../../../context/profile'

const CreateAccount: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const {authState} = useOktaAuth()
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [userType, setUserType] = useState<string>('enabler')
  const [userTypeFull, setUserTypeFull] = useState('basic_enabler')
  const [packagePrice, setPackagePrice] = useState('0.00')
  const [packageDuration, setPackageDuration] = useState<'month' | 'annual'>('month')
  const [initValues] = useState<IProfile>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)
  const [isShowAlert, setIsShowAlert] = useState(false)
  const [categoryQuestion, setCategoryQuestion] = useState('')
  const [alertType, setAlertType] = useState('')
  const [showCancelBtn, setShowCancelBtn] = useState(true)
  const [titleText, setTitleText] = useState('')
  const [confirmBtnText, setConfirmBtnText] = useState('Yes')
  const [hideShow, setHideShow] = useState(true)
  const [formValues, setFormValues] = useState<IProfile>({})
  const {profile, setProfile, loaded, setLoaded} = useContext(profileContext)

  useEffect(() => {
    if (authState !== null && profile?.id !== authState.accessToken?.claims.uid && !loaded) {
      axios
        .get(
          `${process.env.REACT_APP_DIASPREX_API_URL}/profile/${authState.accessToken?.claims.uid}`
        )
        .then((res) => {
          const newProfile = res.data.data[0]
          setProfile(newProfile)
          setLoaded(true)
          if (newProfile.status === 'active') {
            navigate({
              pathname: '/dashboard',
              search: `?userType=${userType}&userTypeFull=${userTypeFull}`,
            })
          }
        })
    }
  }, [authState, profile, setProfile, loaded, setLoaded])

  const subscriptionpackage: SubscriptionPackage = useSelector((state) => state.subscriptionpackage)

  useEffect(() => {
    if (userTypeFull !== 'basic_enabler' || userType === 'sponsor') {
      setHideShow(false)
    } else {
      setHideShow(true)
    }
  }, [userTypeFull, userType])
  const questions = {
    individual: 'Are you a citizen  or a resident of a country in the OECD regions?',
    business: 'Is your business  located and registered in a country in the OECD region',
    sponsor:
      'Is your business located in  Africa and registered with the appropriate local government?',
  }
  const [sponsorAlert, setSponsorAlert] = useState(
    'Your registration request for Diasprex\
        information, proof of physical location, evidence of  current operation, history of tax filing, banking information, 2 - 3 references of  customers or partners, and others.Please be prepared to provide or assist in obtaining  some of these information upon request'
  )

  const navigate = useNavigate()

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }
    // setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)
    setSubmitButton(false)
    stepper.current.goPrev()

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }

  const submitStep = (values: IProfile, actions: FormikActions<FormikValues>) => {
    const dpxNumber = getUniqueDPXId('DPX')
    if (!stepper.current) {
      return
    }
    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex])
    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)

    if (stepper.current.currentStepIndex !== (userTypeFull === 'basic_enabler' ? 4 : 6)) {
      // if (stepper.current.currentStepIndex == 1) {
      //   if (userTypeFull == 'basic_enabler' || 'super_enabler' || 'standard_enabler') {
      //     setCategoryQuestion(questions.individual)
      //     setIsShowAlert(true)
      //   } else if (userType == 'business_enabler') {
      //     setCategoryQuestion(questions.business)
      //     setIsShowAlert(true)
      //   } else if (userType == 'sponsor') {
      //     setCategoryQuestion(questions.sponsor)
      //     setIsShowAlert(true)
      //   } else {
      //     stepper.current.goNext()
      //   }
      // } else {
      // data capture here
      actions.setSubmitting(true)
      setFormValues({
        ...values,
        id: authState?.accessToken?.claims.uid,
        dpxid: getUniqueDPXUserId('DPX'),
        datejoined: moment(new Date()).format('DD MMM YYYY'),
        usertype: localStorage.getItem('userType'),
        countryres: values.countryres,
        accountType: subscriptionpackage.userType,
        subscriptiontier: subscriptionpackage.userTypeFull,
        billing: {
          packagePrice: subscriptionpackage.packagePrice,
          packageDuration: subscriptionpackage.packageDuration,
        },
        status:
          formValues.subscriptiontier === 'basic_enabler' ||
          formValues.subscriptiontier === 'super_enabler'
            ? 'active'
            : 'new',
      })
      stepper.current.goNext()
      console.log('ReduxProfileData', formValues)

      // }
    } else {
      // stepper.current.goto(1)
      //

      console.log('CreateProfile', formValues)
      createUserProfileAPI(formValues).then((res) => {
        if (res.status === 200) {
          if (userType == 'sponsor') {
            setConfirmBtnText('Ok')
            setShowCancelBtn(false)
            setTitleText('Congratulations')
            setCategoryQuestion(sponsorAlert)
            setAlertType('success')
            setIsShowAlert(true)
          } else
            navigate({
              pathname: '/dashboard',
              search: `?user=${dpxid}&userType=${userType}&userTypeFull=${userTypeFull}`,
            })
          actions.resetForm()
        } else {
          navigate({
            pathname: '/dashboard',
            search: `?user=${dpxid}&userType=${userType}&userTypeFull=${userTypeFull}`,
          })
          actions.resetForm()
        }
      })
    }
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  const onConfirm = () => {
    if (stepper.current.currentStepIndex == 6) {
      navigate({
        pathname: '/',
      })
    } else {
      stepper.current.goNext()
    }
    setIsShowAlert(false)
  }
  const onCancel = () => {
    setIsShowAlert(false)
  }
  useEffect(() => {
    localStorage.setItem('userType', 'enabler')
    localStorage.setItem('userTypeFull', 'basic_enabler')
  }, [])
  // console.log('total', stepper.current && stepper.current.totatStepsNumber)
  return (
    <div>
      {!loaded && (
        <div className='d-flex position-absolute w-100 h-100 justify-content-center align-items-center bg-white z-index-2'>
          Loading...
        </div>
      )}
      <div
        ref={stepperRef}
        className='stepper stepper-pills stepper-column   d-flex flex-column flex-xl-row flex-row-fluid'
        id='kt_create_account_stepper'
      >
        <SweetAlert
          type={alertType || ''}
          show={isShowAlert}
          showCancel={showCancelBtn}
          confirmBtnText={confirmBtnText}
          title={titleText}
          onConfirm={onConfirm}
          onCancel={onCancel}
          focusCancelBtn
          cancelBtnText='No'
          confirmButtonClass='btn-success'
          cancelButtonClass='btn-danger'
        >
          {categoryQuestion}
        </SweetAlert>

        <div className='d-flex justify-content-center bg-white rounded justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9'>
          <div className='px-6 px-lg-10 px-xxl-15 py-20 '>
            <div className='stepper-nav'>
              <div className='stepper-item current' data-kt-stepper-element='nav'>
                <div className='stepper-line w-40px'></div>

                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>1</span>
                </div>

                <div className='stepper-label'>
                  <h3 className='stepper-title'>Account Type</h3>

                  <div className='stepper-desc fw-bold'>Select Your Subsription Type</div>
                </div>
              </div>

              <div className='stepper-item' data-kt-stepper-element='nav'>
                <div className='stepper-line w-40px'></div>

                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>2</span>
                </div>

                <div className='stepper-label'>
                  <h3 className='stepper-title'>Phone Verification</h3>
                  <div className='stepper-desc fw-bold'>Verify You are a Human</div>
                </div>
              </div>

              <div className='stepper-item' data-kt-stepper-element='nav'>
                <div className='stepper-line w-40px'></div>

                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>3</span>
                </div>

                <div className='stepper-label'>
                  <h3 className='stepper-title'>Account Info</h3>
                  <div className='stepper-desc fw-bold'>Setup Your Account Info</div>
                </div>
              </div>

              <div
                className={`stepper-item ${hideShow ? 'class-hide' : ''}`}
                data-kt-stepper-element='nav'
              >
                <div className='stepper-line w-40px'></div>

                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>4</span>
                </div>

                <div className='stepper-label'>
                  <h3 className='stepper-title'>Billing Details</h3>
                  <div className='stepper-desc fw-bold'>Set Your Payment Methods</div>
                </div>
              </div>

              <div
                className={`stepper-item ${hideShow ? 'class-hide' : ''}`}
                data-kt-stepper-element='nav'
              >
                <div className='stepper-line w-40px'></div>

                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>5</span>
                </div>

                <div className='stepper-label'>
                  <h3 className='stepper-title'>Verify Details</h3>
                  <div className='stepper-desc fw-bold'>verify product & card details</div>
                </div>
              </div>
              {/* )} */}

              <div className='stepper-item' data-kt-stepper-element='nav'>
                <div className='stepper-line w-40px'></div>

                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>{userTypeFull === 'basic_enabler' ? 4 : 6}</span>
                </div>

                <div className='stepper-label'>
                  <h3 className='stepper-title'>Completed</h3>
                  <div className='stepper-desc fw-bold'>Final Step</div>
                </div>
              </div>

              {/*<div className='stepper-item' data-kt-stepper-element='nav'>
              <div className='stepper-line w-40px'></div>
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>5</span>
              </div>
              <div className='stepper-label'>
                <h3 className='stepper-title'>Completed</h3>
                <div className='stepper-desc fw-bold'>Woah, we are here</div>
              </div>
            </div> */}
            </div>
          </div>
        </div>

        <div className='d-flex flex-row-fluid flex-center bg-white rounded '>
          <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
            {/* <Formik initialValues={initValues} onSubmit={submitStep}> */}
            {({setFieldValue}) => (
              <Form
                className={
                  'py-20 w-100  px-9' +
                  ' ' +
                  `${stepper.current && stepper.current.currentStepIndex > 1 && 'w-xl-700px'}`
                }
                noValidate
                id='kt_create_account_form'
              >
                {/* w-xl-700px */}
                <div className='d-flex justify-content-center align-items-center'>
                  <div className='current' data-kt-stepper-element='content'>
                    <SubscriptionPlans3
                      userType={userType}
                      setUserType={setUserType}
                      submitStep={submitStep}
                      setUserTypeFull={setUserTypeFull}
                      userTypeFull={userTypeFull}
                      packagePrice={packagePrice}
                      setPackagePrice={setPackagePrice}
                      packageDuration={packageDuration}
                      setPackageDuration={setPackageDuration}
                    />
                  </div>
                </div>

                <div data-kt-stepper-element='content' className='w-xl-800px'>
                  <PhoneVerification userType={userType} />
                  <PhoneVerification2 />
                </div>

                <div data-kt-stepper-element='content' className='w-xl-800px'>
                  <Step3
                    userType={userType}
                    userTypeFull={userTypeFull}
                    setFieldValue={setFieldValue}
                  />
                </div>

                {userTypeFull !== 'basic_enabler' && (
                  <div data-kt-stepper-element='content' className='w-xl-800px'>
                    <Step4 />
                  </div>
                )}

                {userTypeFull !== 'basic_enabler' && (
                  <div data-kt-stepper-element='content' className='w-xl-800px'>
                    <AccountVerification userInfo={formValues} />
                  </div>
                )}

                <div data-kt-stepper-element='content' className='w-xl-800px'>
                  <Step5 />
                </div>

                <div className='d-flex flex-stack justify-content-center pt-10'>
                  <div className='mr-2'>
                    <button
                      onClick={prevStep}
                      type='button'
                      className='btn btn-lg btn-light-primary me-3'
                      data-kt-stepper-action='previous'
                    >
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr063.svg'
                        className='svg-icon-4 me-1'
                      />
                      Back
                    </button>
                  </div>

                  <div>
                    <button type='submit' className='btn btn-lg btn-primary me-3'>
                      <span className='indicator-label'>
                        {!isSubmitButton && 'Continue'}
                        {isSubmitButton && 'Submit'}
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr064.svg'
                          className='svg-icon-3 ms-2 me-0'
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export {CreateAccount}
