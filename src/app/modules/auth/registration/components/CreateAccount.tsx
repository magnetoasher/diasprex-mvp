// @ts-nocheck comment
import React, {FC, useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Step1} from './steps/Step1'
import {Step2} from './steps/Step2'
import {Step3} from './steps/Step3'
import {Step4} from './steps/Step4'
import {Step5} from './steps/Step5'
import AccountVerification from './steps/AccountVerification'
import {StepperComponent} from '../../../../../_metronic/assets/ts/components'
import {Formik, Form, FormikValues} from 'formik'
import './hide-stepper.css'
import {ICreateAccount, createAccountSchemas, inits} from './CreateAccountWizardHelper'
import SweetAlert from 'react-bootstrap-sweetalert'
// import SubscriptionPlans from './steps/SubscriptionPlans'
import SubscriptionPlans3 from './SubscriptionComponet/SubscriptionPlans3'
import SubscriptionPlans from './SubscriptionComponet/SubscriptionPlanColumn'

const CreateAccount: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [userType, setUserType] = useState<string>('enabler')
  const [userTypeFull, setUserTypeFull] = useState('')
  const [initValues] = useState<ICreateAccount>(inits)

  const [isShowAlert, setIsShowAlert] = useState(false)
  const [categoryQuestion, setCategoryQuestion] = useState('')
  const [alertType, setAlertType] = useState('')
  const [showCancelBtn, setShowCancelBtn] = useState(true)
  const [titleText, setTitleText] = useState('')
  const [confirmBtnText, setConfirmBtnText] = useState('Yes')
  const [hideShow, setHideShow] = useState(true)

  useEffect(() => {
    if (userType !== 'basic') {
      setHideShow(false)
    } else {
      setHideShow(true)
    }
  }, [userType])
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
    stepper.current = stepper.current = StepperComponent.createInsance(
      stepperRef.current as HTMLDivElement
    )
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex])

    if (stepper.current.currentStepIndex !== (userType === 'basic' ? 3 : 5)) {
      if (stepper.current.currentStepIndex == 1) {
        //text
        if (userType == 'individual') {
          setCategoryQuestion(questions.individual)
          setIsShowAlert(true)
        } else if (userType == 'business') {
          setCategoryQuestion(questions.business)
          setIsShowAlert(true)
        } else if (userType == 'sponsor') {
          setCategoryQuestion(questions.sponsor)
          setIsShowAlert(true)
        } else {
          stepper.current.goNext()
        }
      } else {
        stepper.current.goNext()
      }
    } else {
      // stepper.current.goto(1)
      // actions.resetForm()

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
          search: `?userType=${userType}&userTypeFull=${userTypeFull}`,
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
    if (stepper.current.currentStepIndex == 5) {
      navigate({
        pathname: '/dashboard',
        search: `?userType=${userType}&setUserTypeFull=${userTypeFull}`,
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
    localStorage.setItem('userType', 'basic')
    localStorage.setItem('userTypeFull', 'Basic Enabler')
  }, [])
  console.log('total', stepper.current && stepper.current.totatStepsNumber)
  return (
    <div>
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

                  <div className='stepper-desc fw-bold'>Setup Your Account Details</div>
                </div>
              </div>

              <div className='stepper-item' data-kt-stepper-element='nav'>
                <div className='stepper-line w-40px'></div>

                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>2</span>
                </div>

                <div className='stepper-label'>
                  <h3 className='stepper-title'>Account Info</h3>
                  <div className='stepper-desc fw-bold'>Setup Your Account Info</div>
                </div>
              </div>

              {/* {userType !== "basic" && ( */}
              <div
                className={`stepper-item ${hideShow ? 'class-hide' : ''}`}
                data-kt-stepper-element='nav'
              >
                <div className='stepper-line w-40px'></div>

                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>3</span>
                </div>

                <div className='stepper-label'>
                  <h3 className='stepper-title'>Billing Details</h3>
                  <div className='stepper-desc fw-bold'>Set Your Payment Methods</div>
                </div>
              </div>
              {/* )} */}

              {/* {userType !== "basic" && ( */}
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
                  <h3 className='stepper-title'>Verify Details</h3>
                  <div className='stepper-desc fw-bold'>verify product & card details</div>
                </div>
              </div>
              {/* )} */}

              <div className='stepper-item' data-kt-stepper-element='nav'>
                <div className='stepper-line w-40px'></div>

                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>{userType === 'basic' ? 3 : 5}</span>
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
            {() => (
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
                    />
                  </div>
                </div>

                {/* <div data-kt-stepper-element='content'>
                <Step2 />
              </div> */}
                <div data-kt-stepper-element='content' className='w-xl-800px'>
                  <Step3 userType={userType} />
                </div>

                {userType !== 'basic' && (
                  <div data-kt-stepper-element='content' className='w-xl-800px'>
                    <Step4 />
                  </div>
                )}

                {userType !== 'basic' && (
                  <div data-kt-stepper-element='content' className='w-xl-800px'>
                    <AccountVerification />
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
                        {stepper.current?.currentStepIndex !==
                          stepper.current?.totatStepsNumber! - 1 && 'Continue'}
                        {stepper.current?.currentStepIndex ===
                          stepper.current?.totatStepsNumber! - 1 && 'Submit'}
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
