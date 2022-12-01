// @ts-nocheck comment
import {FC, useEffect, useRef, useState} from 'react'

import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {StepperComponent} from '../../../assets/ts/components'
import {Formik, Form, Field, FormikValues} from 'formik'
import {upgradePlanSchemas, IUpgradePlan, inits} from './UpgradePlanWizardHelper'
import {UpgradePlan} from './UpgradePlan'
import {CheckingAccount, CreditCard} from '../../content/paymentcards'

const UpgradePlanHorizontal: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(upgradePlanSchemas[0])
  const [initValues] = useState<IUpgradePlan>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)

  const [upgradePackage, setUpgradePackage] = useState()
  const [payMethod, setPayMethod] = useState('credit')

  const PayMethod = [
    {
      title: 'Credit',

      value1: 'credit',
    },

    {
      title: 'Checking',

      value1: 'checking',
    },
  ]

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)

    stepper.current.goPrev()

    setCurrentSchema(upgradePlanSchemas[stepper.current.currentStepIndex - 1])
  }

  const submitStep = (values: IUpgradePlan, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)

    setCurrentSchema(upgradePlanSchemas[stepper.current.currentStepIndex])

    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      stepper.current.goNext()
    } else {
      try {
        setUpgradePackage(values)
      } catch (errors) {
        console.log(errors)
      } finally {
        actions.resetForm()
      }

      // stepper.current.goto(1)
    }
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (
    <div className='modal fade' id='kt_modal_upgrade_plan' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered mw-75'>
        <div className='modal-content'>
          <div className='modal-headerx bg-light'>
            <div className='d-flex justify-content-end pt-3 px-3 '>
              <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
                <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
              </div>
            </div>
            <div className='mb-3 text-center'>
              <h2>Upgrade a Plan</h2>
              <div className='text-muted fw-bold fs-5'>
                If you need more info, please check{' '}
                <a href='#' className='link-primary fw-bolder'>
                  Pricing Guidelines
                </a>
                .
              </div>
            </div>
          </div>

          <div className='modal-body py-lg-2 px-lg-2'>
            <div
              ref={stepperRef}
              className='stepper stepper-links d-flex flex-column pt-5'
              id='kt_upgrade_plan_stepper'
            >
              <div className='stepper-nav mb-5'>
                <div className='stepper-item current' data-kt-stepper-element='nav'>
                  <h3 className='stepper-title'>Select a Plan</h3>
                </div>

                <div className='stepper-item' data-kt-stepper-element='nav'>
                  <h3 className='stepper-title'>Billing Details</h3>
                </div>

                <div className='stepper-item' data-kt-stepper-element='nav'>
                  <h3 className='stepper-title'>Completed</h3>
                </div>
              </div>

              <Formik
                // validationSchema={currentSchema}
                initialValues={initValues}
                onSubmit={submitStep}
              >
                {() => (
                  <Form className='mx-auto w-100 pt-15 pb-10' id='kt_upgrade_plan_form'>
                    <div className='d-flex justify-content-center'>
                      <div className='current ' data-kt-stepper-element='content'>
                        <UpgradePlan />
                      </div>

                      <div data-kt-stepper-element='content'>
                        <div className='d-flex flex-column'>
                          <div className='nav flex justify-content-center align-items-center'>
                            {PayMethod.map((type, index) => (
                              <div
                                onClick={() => {
                                  setPayMethod(type.value1)
                                }}
                                className={
                                  `cnav-link  d-flex flex-stack text-start p-6 col-lg-4` + 'mb-6'
                                }
                                key={index}
                              >
                                <div className='d-flex align-items-center me-2'>
                                  <div className='form-check form-check-custom form-check-solid form-check-success me-6'>
                                    <Field
                                      className='form-check-input-type'
                                      type='radio'
                                      name='paymethod'
                                      value={type.value1}
                                      checked={payMethod === type.value1}
                                      // onChange={(e) => setCurrentState(e.target.value)}
                                    />
                                  </div>

                                  <div className='flex-grow-1'>
                                    <h5 className='d-flex align-items-center   flex-wrap'>
                                      {type.title}
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div>
                            {payMethod === 'credit' && <CreditCard />}
                            {payMethod === 'checking' && <CheckingAccount />}
                          </div>
                        </div>
                      </div>

                      <div data-kt-stepper-element='content'>
                        <div className='w-100 text-center'>
                          <h1 className='fw-bolder text-dark mb-3'>Confirm!</h1>

                          <div className='text-primary fw-bold fs-3'>
                            Submit your upgrade request.
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
                    </div>

                    <div className='d-flex flex-stack pt-15'>
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
      </div>
    </div>
  )
}

export {UpgradePlanHorizontal}
