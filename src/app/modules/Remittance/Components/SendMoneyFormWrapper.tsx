import {SendMoneyForm} from './SendMoneyForm'

export const SendMoneyFormWrapper = () => {
  return (
    <div className='card-container shadow-sm px-10 py-5 mt-6 mw-600px' style={{margin: 'auto'}}>
      <div className='card-header'>
        <h3 className='card-title'>Money Transfer</h3>
        <div className='text-muted fw-bold fs-5'>
          You are sending money through a third party MTO partner
        </div>
      </div>
      <div className='card-body'>
        <SendMoneyForm />
      </div>
      <div className='d-flex flex-row'>
        <div className='card-footer'>
          Money transfer transactions are processed by Diasprex third party partners
        </div>
      </div>
    </div>
  )
}
