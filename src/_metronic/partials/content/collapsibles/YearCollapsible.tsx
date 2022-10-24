type Props = {
  currentYear: string
  target: string
}
export const YearCollapsible = (props:Props) => {
    // const today = new Date()
    return (
                 
                <div className='m-0 mw-100'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target={props.target}
                      >
                        <div className='btn btn-sm btn-icon mw-20px btn-active-color-primary me-5'>
                          <span className='svg-icon toggle-on svg-icon-primary svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='6.0104'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                          <span className='svg-icon toggle-off svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.3'
                                x='2'
                                y='2'
                                width='20'
                                height='20'
                                rx='5'
                                fill='black'
                              />
                              <rect
                                x='10.8891'
                                y='17.8033'
                                width='12'
                                height='2'
                                rx='1'
                                transform='rotate(-90 10.8891 17.8033)'
                                fill='black'
                              />
                              <rect
                                x='6.01041'
                                y='10.9247'
                                width='12'
                                height='2'
                                rx='1'
                                fill='black'
                              />
                            </svg>
                          </span>
                        </div>
                        <h4 className='text-gray-700 fw-bolder cursor-pointer mb-0'>
            {/* {today.getFullYear()} */}
                            {props.currentYear}
                        </h4>
                      </div>
                        </div>
            

        
)
}