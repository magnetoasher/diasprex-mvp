import React, {useState} from 'react'
import {Formik, Form, FormikValues} from 'formik'
import BillingCardComponent from '../../BillingCardComponent'
import CheckingAccount from '../../../auth/registration/components/steps/CheckingAccount'
import {
  IProfile,
  createAccountSchemas,
  inits,
} from '../../../auth/registration/components/CreateAccountWizardHelper'

export const PaymentMethods = () => {
  const [tabs, setTabs] = useState('debit-card')
  const [isShowAlert, setIsShowAlert] = useState(false)
  const [userType, setUserType] = useState(localStorage.getItem('userType'))
  const [userTypeFull, setUserTypeFull] = useState(localStorage.getItem('userTypeFull'))
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<IProfile>(inits)
  const submitStep = (values: IProfile, actions: FormikValues) => {}
  return (
    <div>
      {userTypeFull !== 'basic_enabler' && (
        <div className='card mb-5 mb-xl-10 mt-5'>
          <div className='card-header card-header-stretch pb-0'>
            <div className='card-title'>
              <h3 className='m-0'>Payment Methods</h3>
            </div>

            <div className='card-toolbar m-0'>
              <ul className='nav nav-stretch nav-line-tabs border-transparent' role='tablist'>
                <li
                  className='nav-item'
                  role='presentation'
                  onClick={() => {
                    setTabs('debit-card')
                  }}
                >
                  <a
                    id='kt_billing_creditcard_tab'
                    className='nav-link fs-5 fw-bolder me-5 active'
                    data-bs-toggle='tab'
                    role='tab'
                    href='#kt_billing_creditcard'
                  >
                    Credit / Debit Card
                  </a>
                </li>

                <li className='nav-item' role='presentation'>
                  <a
                    id='kt_billing_paypal_tab'
                    className='nav-link fs-5 fw-bolder'
                    data-bs-toggle='tab'
                    role='tab'
                    href='#kt_billing_paypal'
                  >
                    Paypal
                  </a>
                </li>
                <li
                  className='nav-item'
                  role='presentation'
                  onClick={() => {
                    setTabs('checking-account')
                  }}
                >
                  <a
                    id='kt_billing_paypal_tab'
                    className='nav-link fs-5 fw-bolder'
                    data-bs-toggle='tab'
                    role='tab'
                    href='#kt_billing_paypal'
                  >
                    Checking Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {tabs == 'debit-card' ? (
            <BillingCardComponent />
          ) : (
            <Formik
              validationSchema={currentSchema}
              initialValues={initValues}
              onSubmit={submitStep}
            >
              {() => <CheckingAccount />}
            </Formik>
          )}
        </div>
      )}
      )
    </div>
  )
}
