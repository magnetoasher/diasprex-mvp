/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect, useRef, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Formik, Form, FormikValues, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {StepperComponent} from '../../../assets/ts/components'
import {CheckingAccount, CreditCard, PaypalAcc} from '../../content/paymentcards'

interface ICreateAccount {
  amount: string
  fundsource: string
  routingNumber: string
  accountNumber: string
  nameOnCard: string
  cardNumber: string
  cardExpiryMonth: string
  cardExpiryYear: string
  cardCvv: string
  saveCard: string
  saveAccount: string
}

const inits: ICreateAccount = {
  amount: '',
  fundsource: '1',
  routingNumber: '',
  accountNumber: '',
  nameOnCard: 'Max Doe',
  cardNumber: '4111 1111 1111 1111',
  cardExpiryMonth: '1',
  cardExpiryYear: '2025',
  cardCvv: '123',
  saveCard: '1',
  saveAccount: '1',
}

const createAppSchema = [
  Yup.object({
    amount: Yup.number().required().label('Fund Amount'),
    fundsource: Yup.string().required().label('Fund Source'),
  }),
  // Yup.object({
  //   framework: Yup.string().required().label('Framework'),
  // }),
  // Yup.object({
  //   dbName: Yup.string().required().label('Database name'),
  //   dbType: Yup.string().required().label('Database engine'),
  // }),
  Yup.object({
    // routingNumber: Yup.string().when('fundsource', {
    //   is: '1',
    //   then: Yup.number().required().label('Routing number'),
    // }),
    // accountNumber: Yup.number().required().label('Account number'),
    nameOnCard: Yup.string().required().label('Name'),
    cardNumber: Yup.string().required().label('Card Number'),
    cardExpiryMonth: Yup.string().required().label('Expiration Month'),
    cardExpiryYear: Yup.string().required().label('Expiration Year'),
    cardCvv: Yup.string().required().label('CVV'),
  }),
]

const AddFund: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAppSchema[0])
  const [initValues] = useState<ICreateAccount>(inits)
  const [fundSourceValue, setFundSourceValue] = useState('')

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()

    setCurrentSchema(createAppSchema[stepper.current.currentStepIndex - 1])
  }

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    setCurrentSchema(createAppSchema[stepper.current.currentStepIndex])

    if (stepper.current?.getCurrentStepIndex() !== stepper.current?.totatStepsNumber) {
      stepper.current.goNext()
      setFundSourceValue(values.fundsource)
      console.log(
        'Fundsource',
        fundSourceValue,
        stepper.current?.currentStepIndex,
        stepper.current?.totatStepsNumber
      )
    } else {
      // stepper.current.goto(1)
      actions.resetForm()
      window.location.reload()
    }
  }

  // const nextStep = () => {
  //   if (!stepper.current) {
  //     return
  //   }

  //   stepper.current.goNext()
  // }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (
    <div className='modal fade' id='kt_modal_add_fund' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered mw-900px'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h2>Add Funds to Your Remittance Retainer</h2>

            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
              <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
            </div>
          </div>

          <div className='modal-body py-lg-10 px-lg-10'>
            <div
              ref={stepperRef}
              className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
              id='kt_modal_add_fund_stepper'
            >
              <div className='d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px'>
                <div className='stepper-nav ps-lg-10'>
                  <div className='stepper-item current' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>1</span>
                    </div>

                    <div className='stepper-label'>
                      <h3 className='stepper-title'>Amount and Fund Source</h3>

                      <div className='stepper-desc'>Specify amount and the fund source</div>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>2</span>
                    </div>

                    <div className='stepper-label'>
                      <h3 className='stepper-title'>Payment Details</h3>

                      <div className='stepper-desc'>Provide payment details</div>
                    </div>
                  </div>

                  <div className='stepper-item' data-kt-stepper-element='nav'>
                    <div className='stepper-line w-40px'></div>

                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>3</span>
                    </div>

                    <div className='stepper-label'>
                      <h3 className='stepper-title'>Confirm</h3>

                      <div className='stepper-desc'>Review and Submit</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex-row-fluid py-lg-5 px-lg-15'>
                <Formik
                  validationSchema={currentSchema}
                  initialValues={initValues}
                  onSubmit={submitStep}
                >
                  {() => (
                    <Form className='form' noValidate id='kt_modal_add_fund_form'>
                      <div className='current' data-kt-stepper-element='content'>
                        <div className='w-100'>
                          <div className='fv-row mb-10'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                              <span className='required'>Amount in USD</span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Enter funds amount in USD'
                              ></i>
                            </label>

                            <Field
                              type='text'
                              className='form-control form-control-lg form-control-solid'
                              name='amount'
                              placeholder=''
                            />
                            <div className='text-danger'>
                              <ErrorMessage name='amount' />
                            </div>
                          </div>
                          <div className='fv-row'>
                            <label className='d-flex align-items-center fs-5 fw-bold mb-4'>
                              <span className='required'>Fund Source</span>

                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Select your app category'
                              ></i>
                            </label>

                            <div className='fv-row'>
                              <label className='d-flex flex-stack mb-5 cursor-pointer'>
                                <span className='d-flex align-items-center me-2'>
                                  <span className='symbol symbol-50px me-6'>
                                    <span className='symbol-label bg-light-primary'>
                                      <KTSVG
                                        path='/media/icons/duotune/finance/fin003.svg'
                                        className='svg-icon-1 svg-icon-primary'
                                      />
                                    </span>
                                  </span>

                                  <span className='d-flex flex-column'>
                                    <span className='fw-bolder fs-6'>Checking Account</span>

                                    <span className='fs-7 text-muted'>
                                      Requires checking account number and rounting number
                                    </span>
                                  </span>
                                </span>

                                <span className='form-check form-check-custom form-check-solid'>
                                  <Field
                                    className='form-check-input'
                                    type='radio'
                                    name='fundsource'
                                    value='1'
                                    // onChange={(e: any) => handleFundSourceValue(e.target.value)}
                                  />
                                </span>
                              </label>

                              <label className='d-flex flex-stack mb-5 cursor-pointer'>
                                <span className='d-flex align-items-center me-2'>
                                  <span className='symbol symbol-50px me-6'>
                                    <span className='symbol-label bg-light-danger  '>
                                      <KTSVG
                                        path='/media/icons/duotune/finance/fin002.svg'
                                        className='svg-icon-1 svg-icon-danger'
                                      />
                                    </span>
                                  </span>

                                  <span className='d-flex flex-column'>
                                    <span className='fw-bolder fs-6'>Credit Card</span>

                                    <span className='fs-7 text-muted'>
                                      Master card, Visa, and American Express
                                    </span>
                                  </span>
                                </span>

                                <span className='form-check form-check-custom form-check-solid'>
                                  <Field
                                    className='form-check-input'
                                    type='radio'
                                    name='fundsource'
                                    value='2'
                                    // onChange={(e: any) => handleFundSourceValue(e.target.value)}
                                  />
                                </span>
                              </label>

                              <label className='d-flex flex-stack cursor-pointer'>
                                <span className='d-flex align-items-center me-2'>
                                  <span className='symbol symbol-50px me-6'>
                                    <span className='symbol-label bg-light-success'>
                                      <KTSVG
                                        path='/media/icons/duotune/finance/fin002.svg'
                                        className='svg-icon-1 svg-icon-success'
                                      />
                                    </span>
                                  </span>

                                  <span className='d-flex flex-column'>
                                    <span className='fw-bolder fs-6'>Paypal </span>

                                    <span className='fs-7 text-muted'>
                                      Transfer funds from your paypal account
                                    </span>
                                  </span>
                                </span>

                                <span className='form-check form-check-custom form-check-solid'>
                                  <Field
                                    className='form-check-input'
                                    type='radio'
                                    name='fundsource'
                                    value='3'
                                  />
                                </span>
                              </label>
                            </div>

                            <div className='text-danger'>
                              <ErrorMessage name='fundsource' />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div data-kt-stepper-element='content'>
                        <div className='w-100'>
                          <div className='pb-10 pb-lg-15'>
                            <h2 className='fw-bolder text-dark'>Billing Details</h2>

                            <div className='text-gray-400 fw-bold fs-6 '>
                              <span className='me-2'>If you need more info, please check out</span>
                              <a href='/faqs' className='text-primary fw-bolder '>
                                Help Page
                              </a>
                              .
                            </div>
                          </div>
                          {fundSourceValue === '1' && <CheckingAccount />}
                          {fundSourceValue === '2' && <CreditCard />}
                          {fundSourceValue === '3' && <PaypalAcc />}
                        </div>
                      </div>

                      <div data-kt-stepper-element='content'>
                        <div className='w-100 text-center'>
                          <h1 className='fw-bolder text-dark mb-3'>Release!</h1>

                          <div className='text-muted fw-bold fs-3'>
                            Submit your app to kickstart your project.
                          </div>

                          <div className='text-center px-4 py-15'>
                            <img
                              src={toAbsoluteUrl('/media/illustrations/sketchy-1/9.png')}
                              alt=''
                              className='w-100 mh-300px'
                            />
                          </div>
                        </div>
                      </div>

                      <div className='d-flex flex-stack pt-10'>
                        <div className='me-2'>
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
                            Previous
                          </button>
                        </div>

                        <div>
                          <button type='submit' className='btn btn-lg btn-primary me-3'>
                            <span className='indicator-label'>
                              {stepper.current?.currentStepIndex !==
                                stepper.current?.totatStepsNumber! - 1 && 'Next'}
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
        </div>
      </div>
    </div>
  )
}

export {AddFund}
