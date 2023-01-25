// @ts-nocheck comment
import {FC, useContext, useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {StepperComponent} from '../../../assets/ts/components'
import {Formik, Form, Field, FormikValues} from 'formik'
import {upgradePlanSchemas, IUpgradePlan, inits} from './UpgradePlanWizardHelper'
import {UpgradePlan} from './UpgradePlan'
import {CheckingAccount, CreditCard} from '../../content/paymentcards'
import {profileContext} from '../../../../app/context/profile'
import {createUserProfileAPI} from '../../../../app/modules/profile/redux/ProfileAPI'
import Swal from 'sweetalert2'

const UpgradePlanHorizontal: FC = () => {
  const {profile} = useContext(profileContext)
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(upgradePlanSchemas[0])
  const [initValues] = useState<IUpgradePlan>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)
  const [billingCycle, setBillingCycle] = useState<'month' | 'annual'>('month')
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [packagePrice, setPackagePrice] = useState(localStorage.getItem('packagePrice'))
  const [packageDuration, setPackageDuration] = useState(localStorage.getItem('packageDuration'))
  const [userTypeFull, setUserTypeFull] = useState(localStorage.getItem('userTypeFull'))
  const [userType] = useState(profile?.usertype)
  const [selectedEnabler, setSelectedEnabler] = useState(userTypeFull)
  const [selectedSponsor, setSelectedSponsor] = useState(userTypeFull)

  const [upgradePackage, setUpgradePackage] = useState()
  const [payMethod, setPayMethod] = useState('credit')

  const navigate = useNavigate()

  const PayMethod = [
    {
      title: 'Credit',

      value1: 'credit',
      default: true,
    },

    {
      title: 'Checking',

      value1: 'checking',
      default: false,
    },
  ]

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

    setCurrentSchema(upgradePlanSchemas[stepper.current.currentStepIndex - 1])
  }
  console.log('Submitting', isSubmitButton)

  const submitStep = (values: IUpgradePlan, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)

    setCurrentSchema(upgradePlanSchemas[stepper.current.currentStepIndex])

    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      stepper.current.goNext()
      console.log('upgrade', values)
    } else {
      try {
        const data: IUpgradePlan = {
          ...values,
          email: profile?.email,
          userType: userType,
          userTypeFull: userTypeFull,
          packageDuration: packageDuration,
          packagePrice: packagePrice,
        }
        createUserProfileAPI(data).then((res) => {
          if (res.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Successfully done',
            })
            setUpgradePackage(data)
          }
        })
        console.log(data)
      } catch (errors) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong',
        })
        console.log(errors)
      } finally {
        // navigate({
        //   pathname: '/dashboard',
        //   search: `?userType=${userType}&userTypeFull=${userTypeFull}`,
        // })
        actions.resetForm()
        window.location.reload()
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
    <div className='modal fade' id='upgrade_plan' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered mw-75'>
        <div className='modal-content'>
          <div className='modal-headerx'>
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
                validationSchema={currentSchema}
                initialValues={initValues}
                onSubmit={submitStep}
              >
                {({}) => (
                  <Form className='mx-auto w-100 pt-15 pb-10' id='kt_upgrade_plan_form'>
                    <div className='d-flex justify-content-center'>
                      <div className='current ' data-kt-stepper-element='content'>
                        <UpgradePlan
                          userType={userType}
                          userTypeFull={userTypeFull}
                          packagePrice={packagePrice}
                          packageDuration={packageDuration}
                          selectedEnabler={selectedEnabler}
                          selectedSponsor={selectedSponsor}
                          selectedIndex={selectedIndex}
                          setUserTypeFull={setUserTypeFull}
                          setPackagePrice={setPackagePrice}
                          setPackageDuration={setPackageDuration}
                          setSelectedEnabler={setSelectedEnabler}
                          setSelectedSponsor={setSelectedSponsor}
                          setSelectedIndex={setSelectedIndex}
                        />
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
                                      value={payMethod}
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
                        <div className='row mb-5 mw-100'>
                          <div className='col-6'>
                            <div className='mw-100 text-center'>
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
                          <div className='col-6'>
                            <div className='card'>
                              <div className='card-header'>
                                <div className='card-title'>
                                  <h2 className='fw-bolder'>Verify Details</h2>
                                </div>
                              </div>
                              <div className='d-flex flex-wrap py-5'>
                                <div className='flex-equal me-5'>
                                  <table className='table fs-6 fw-bold gs-0 gy-2 gx-2 m-0'>
                                    <tr>
                                      <td className='text-gray-400 min-w-175px w-175px'>
                                        Bill to:
                                      </td>
                                      <td className='text-gray-800 min-w-200px'>
                                        <a
                                          href='../../demo1/dist/pages/apps/customers/view.html'
                                          className='text-gray-800 text-hover-primary'
                                        >
                                          {profile?.email}
                                        </a>
                                      </td>
                                    </tr>

                                    <tr>
                                      <td className='text-gray-400'>Customer Name:</td>
                                      <td className='text-gray-800'>
                                        {profile?.fName + ' ' + profile?.lName}
                                      </td>
                                    </tr>

                                    <tr>
                                      <td className='text-gray-400'>Address:</td>
                                      <td className='text-gray-800'>{profile?.orgAddress}</td>
                                    </tr>

                                    <tr>
                                      <td className='text-gray-400'>Phone:</td>
                                      <td className='text-gray-800'>{profile?.phonenumber}</td>
                                    </tr>
                                  </table>
                                </div>

                                <div className='flex-equal'>
                                  <table className='table fs-6 fw-bold gs-0 gy-2 gx-2 m-0'>
                                    <tr>
                                      <td className='text-gray-400 min-w-175px w-175px'>
                                        Subscribed Product:
                                      </td>
                                      <td className='text-gray-800 min-w-200px'>
                                        <a
                                          href='#'
                                          className='text-gray-800 text-hover-primary text-capitalize'
                                        >{` ${userTypeFull?.replace('_', ' ')} bundle`}</a>
                                      </td>
                                    </tr>

                                    <tr>
                                      <td className='text-gray-400'>Subscription Fees:</td>
                                      <td className='text-gray-800 text-capitalize'>{`$${packagePrice} / ${packageDuration}`}</td>
                                    </tr>

                                    <tr>
                                      <td className='text-gray-400'>Billing method:</td>
                                      <td className='text-gray-800'>{packageDuration}</td>
                                    </tr>

                                    <tr>
                                      <td className='text-gray-400'>Currency:</td>
                                      <td className='text-gray-800'>USD - US Dollar</td>
                                    </tr>
                                  </table>
                                </div>

                                <div className='mb-0'>
                                  <h5 className='mb-4'>Subscribed Products:</h5>

                                  <div className='table-responsive'>
                                    <table className='table align-middle table-row-dashed fs-6 gy-4 mb-0'>
                                      <thead>
                                        <tr className='border-bottom border-gray-200 text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                                          <th className='min-w-150px'>Product</th>
                                          <th className='min-w-125px'>Subscription ID</th>
                                          <th className='min-w-125px'>Total</th>
                                        </tr>
                                      </thead>

                                      <tbody className='fw-bold text-gray-800'>
                                        <tr>
                                          <td>
                                            <label className='w-150px text-capitalize'>{`${profile?.usertype} Bundle`}</label>
                                            <div className='fw-normal text-gray-600'>{` ${profile?.accountType?.replace(
                                              '_',
                                              ' '
                                            )} bundle`}</div>
                                          </td>
                                          <td>
                                            <span className='badge badge-light-danger'>
                                              sub_4567_8765
                                            </span>
                                          </td>
                                          <td className='text-capitalize'>{`$${packagePrice} / ${packageDuration}`}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='d-flex flex-stack pt-15 px-10'>
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

                      <div className='d-flex mw-100'>
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
