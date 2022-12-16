import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import GeneralCardComponent from '../../../opportunities/GeneralCardOpportunityComponent/GeneralCardCompnent'
import object1 from '../../../opportunities/core/GeneralOpportunityCardObject1.json'
import {registerables} from 'chart.js'

export const FeaturedOpportunities = () => {
  const handleOppsEngage = () => {}
  return (
    <div className=''>
      <div className='container'>
        <div className='text-center mb-12'>
          <h3 className='fs-2hx text-dark mb-5' id='featured_opps'>
            Featured Opportunities
          </h3>

          <div className='fs-4 fw-bold' style={{color: 'rgba(0, 0, 56, 0.8'}}>
            More than 100 opportunities worth over $5 Billion in value.
            <br />
          </div>
        </div>

        <Carousel>
          <Carousel.Item>
            <div className='d-flex flex-center justify-content-between'>
              {object1.slice(0, 3).map((element) => (
                <GeneralCardComponent
                  id={element.id}
                  sponsor={element.sponsor}
                  badgeColor={element.status == 'Open' ? 'success' : 'danger'}
                  title={element.title}
                  country={element.country}
                  status={element.status}
                  description={element.description}
                  dueDate={element.dueDate}
                  budget={element.budget}
                  src={element.img}
                  summary={element.summary}
                  following={element.following}
                  interest={element.interest}
                />
              ))}
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className='d-flex flex-center justify-content-between'>
              {object1.slice(4, 7).map((element) => (
                <GeneralCardComponent
                  id={element.id}
                  sponsor={element.sponsor}
                  badgeColor={element.status == 'Open' ? 'success' : 'danger'}
                  title={element.title}
                  country={element.country}
                  status={element.status}
                  description={element.description}
                  dueDate={element.dueDate}
                  budget={element.budget}
                  src={element.img}
                  summary={element.summary}
                  following={element.following}
                  interest={element.interest}
                />
              ))}
            </div>
          </Carousel.Item>

          {/* <button className='btn btn-icon btn-active-color-primary' id='kt_team_slider_next'>
            <span className='svg-icon svg-icon-3x'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z'
                  fill='currentColor'
                />
              </svg>
            </span>
          </button> */}
        </Carousel>

        {/* <div className='d-flex align-items-center justify-content-center mt-10'>
          <div className='d-flex   fs-5 text-dark me-3 fw-bold'>
            Ready to engage opportunities today?
            <br />
          </div> */}
        {/* <button
            className='btn btn-primary btn-light-primary'
            id='kt_opps_center'
            onClick={() => <Navigate to='opportunities' />}
          >
            View More
          </button> */}
      </div>
      {/* <div className='separator mt-10'></div> */}
      {/* </div> */}
      <div className='text-center mt-10 ms-1'>
        <Link to='/opportunities' className='btn btn-light-primary rounded-pill me-3'>
          Sign Up to see all opportunities
        </Link>
      </div>
    </div>
  )
}
