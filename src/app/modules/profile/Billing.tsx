/* eslint-disable jsx-a11y/anchor-is-valid */
// @ts-nocheck comment

import React, {FC, useState, useEffect} from 'react'
import {Field, ErrorMessage} from 'formik'
import {KTSVG} from '../../../_metronic/helpers'
import 'react-best-tabs/dist/index.css'
import {Formik, Form, FormikValues} from 'formik'
import SweetAlert from 'react-bootstrap-sweetalert'
import {Step4} from '../auth/registration/components/steps/Step4'
import BillingCardComponent from './BillingCardComponent'

import {
  ICreateAccount,
  createAccountSchemas,
  inits,
} from '../auth/registration/components/CreateAccountWizardHelper'
import CheckingAccount from '../auth/registration/components/steps/CheckingAccount'

const Billing = () => {
  const [tabs, setTabs] = useState('debit-card')
  const [isShowAlert, setIsShowAlert] = useState(false)
  const [userType, setUserType] = useState<string>(localStorage.getItem('userType'))

  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)

  const onConfirm = () => {
    setIsShowAlert(false)
  }
  const onCancel = () => {
    setIsShowAlert(false)
  }
  const submitStep = (values: ICreateAccount, actions: FormikValues) => {}
  console.log(userType)
  return (
    <div className='d-flex flex-column'>
      <button
        data-bs-toggle='modal'
        data-bs-target='#kt_modal_upgrade_plan'
        type='button'
        className='btn btn-primary mb-5'
        style={{
          width: 'fit-content',
          alignSelf: 'end',
        }}
        onClick={() => setIsShowAlert(true)}
      >
        Change Plan
      </button>
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
          <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
            {() => <CheckingAccount />}
          </Formik>
        )}
      </div>
      )
    </div>
  )
}

export default Billing
