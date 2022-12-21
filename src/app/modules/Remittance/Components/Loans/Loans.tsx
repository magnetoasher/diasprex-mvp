import React from 'react'
import { LoanHistory } from './LoanHistory'
import { LoanRequest } from './RequestLoan'

export const Loans = () => {
  return (
    <>
      <LoanHistory className='mb-5 mb-xl-8' />
      <LoanRequest />
    </>
  )
}