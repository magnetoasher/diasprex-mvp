import clsx from 'clsx'
import {useNavigate, Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {Opps} from '../../../../app/modules/apps/admin-mgt-apps/opp-management/opps-list/core/_models'
import Moment from 'moment'

const GeneralOpportunityCard = (props: Opps) => {
  const history = useNavigate()
  const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  const badgeColor = props.open ? 'success' : 'danger'
  const dealTypeLength = props.dealtype?.length! - 1
  return (
    // <Link to='/view_opportunity'>
    <div className='card shadow-sm border border-2 border-gray-300 border-hover p-3'>
      <div className='col-md g-1'>
        <div className='row d-flex flex-row'>
          <div className='col-md-6 flex-start'>
            <p className='fs-3 fw-bolder text-dark'>{props.sponsor}</p>
          </div>
          <div className='col-md-6 text-end'>
            <span className='symbol symbol-30px w-30px bg-light me-2'>
              <img
                src={toAbsoluteUrl(`/media/flags/${props.country?.toLowerCase()}.svg`)}
                className='fs-6 fw-bold'
                alt={props.country}
                data-toggle='tooltips'
                title={props.country}
                data-bs-placement='bottom'
              />
            </span>

            <span className={`badge badge-light-${badgeColor} fw-bolder me-auto py-3`}>
              {props.open ? 'Open' : 'Closed'}
            </span>
          </div>
        </div>
        <div className='separator mb-0'></div>
      </div>

      {/* <div className = 'card-body'> */}
      <div className=' col py-1 px-3 mb-1'>
        <p className='text-gray-400 fw-bold fs-9 mt-1 mb-2'>{props.title}</p>
      </div>

      <div className='col text-center text-center py-1 mb-3 '>
        {/* begin::Image input */}

        {props.thumbnail === '' ? (
          <div
            className={clsx(
              'd-flex symbol-label mw-100 h-200px align-items-center justify-content-center fs-1 rounded',
              `bg-light-${badgeColor}`,
              ` text-capitalize text-${badgeColor}`
            )}
          >
            {props.country}
          </div>
        ) : (
          <img className='d-block mw-100 rounded' src={props.thumbnail} alt='oppsthumb' />
        )}
      </div>

      {/* <div style={{
                display: "flex",
                alignItems: "center"
            }}>

                <div className="fw-bolder text-dark"
                    style={{ display: "flex", alignItems: "end" }}
                >
                    <img height={140} width={120} style={{
                        borderRadius: "0px", objectFit: 'cover'
                    }} src={props.src} alt="image" className="p-3" />

                </div>
                <label style={{
                    fontSize: "18px",
                    marginLeft: "20px",
                    fontWeight: "600"
                }}>{props.title}</label>
            </div> */}

      {/* <div className="text-gray-400 fw-bold fs-5 mt-1 mb-7">
                <label style={{
                    color: "black",
                    fontWeight: 600
                }}> Summary: </label>
                <label style={{
                    display: "inline",
                    color: "black",
                }}>
                    <Tooltip placement="bottom" title={props.summary}>
                        {props.summary ? TruncateText(props.summary, 150) : ""}

                    </Tooltip>
                </label>
            </div> */}
      <div className='col-md py-1 px-3 mb-3'>
        <div className='d-flex justify-content-center flex-wrap mb-5'>
          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3'>
            <div className='fs-6 text-gray-800 fw-bold'>
              {Moment(props.duedate).format('DD MMM, YYYY')}
            </div>
            <div className='fw-semibold text-gray-400'>Due Date</div>
          </div>
          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3'>
            <div className='fs-6 text-gray-800 fw-bold'>
              {props.dealtype?.map((deal, index) =>
                index !== dealTypeLength ? (
                  <span className='me-1'>{deal} |</span>
                ) : (
                  <span className='me-1'>{deal}</span>
                )
              )}
            </div>
            <div className='fw-semibold text-gray-400'>Deal Type</div>
          </div>
          {/* <div
            className='border border-gray-300 border-dashed rounded py-1 px-1 me-7 mb-3'
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className='fs-6 text-gray-800 fw-bolder'>
              <label
                style={{
                  fontSize: '12px',
                }}
              >
                {Moment(props.duedate).format('MMM Do, YYYY')}
              
              </label>
            </div>
            <div className='fw-bold text-gray-400'>Due Date</div>
          </div> */}

          {/* <div
            className='border border-gray-300 border-dashed rounded  py-1 px-1 mb-3'
            style={{
              textAlign: 'center',
            }}
          >
            <div className='fs-6 text-gray-800 fw-bolder'>
              <label
                style={{
                  fontSize: '12px',
                }}
              >
                {props.dealtype?.map((deal, index) =>
                  index !== dealTypeLength ? (
                    <span className='me-1'>{deal} |</span>
                  ) : (
                    <span className='me-1'>{deal}</span>
                  )
                )}
              </label>
            </div>
            <div className='fw-bold text-gray-400'>Deal Type</div>
          </div> */}
        </div>

        <div
          className='h-4px w-100 mb-3'
          data-bs-toggle='tooltip'
          title='This project 50% completed'
          style={{
            backgroundColor: '#c5dcff',
          }}
        ></div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <label style={{fontSize: '23px', fontWeight: '600'}}>{props.following}</label>
            <label
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#b1b1b1',
              }}
            >
              Following
            </label>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <label style={{fontSize: '23px', fontWeight: '600'}}>{props.showedinterest}</label>
            <label
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#b1b1b1',
              }}
            >
              Show of Interest
            </label>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '35px',
        }}
      >
        <button
          // role='button'
          // href='/view_opportunity'
          className='btn btn-primary text-hover-white fw-bolder'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '6px',
          }}
          onClick={() => {
            history(`/opportunities_center/${props.uuid}`)
          }}
        >
          View Opportunity
        </button>
      </div>
      {/* </div> */}
    </div>
    // </Link>
  )
}
export default GeneralOpportunityCard
