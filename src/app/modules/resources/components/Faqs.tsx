import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {FlowThumbnail1} from '../../../../_metronic/partials/content/utilities/flowthumbnail1'

const Faqs: FC = () => {
  return (
    <div>
      <div className='post d-flex flex-column-fluid' id='kt_post'>
        <div id='kt_content_container' className='container-xxl'>
          <div className='card'>
            <div className='card-body p-lg-15'>
              <div className='mb-13'>
                <div className='mb-15'>
                  <h4 className='fs-2x text-gray-800 w-bolder mb-6'>
                    HOW DIASPREX MARKETPLACE WORKS
                  </h4>
                  <div className='fw-bold fs-4 text-gray-600 mb-2'>
                    <div className='row-sm'>
                      <p>
                        <span>
                          <span>&nbsp;</span>
                        </span>
                      </p>
                      <p dir='ltr'>
                        <span>
                          Diasprex marketplace is focused on African diasporas' engagement with
                          business opportunities on the continent of Africa. The main outcome is to
                          connect sponsors of private and institutional business opportunities from
                          Africa to&nbsp; the Enablers -innovators, partners, and investors- in the
                          diaspora. The marketplace has four key components:
                        </span>
                      </p>
                      <p dir='ltr'>
                        <span className='text-gray-800 text-uppercase'>SPONSOR: </span>{' '}
                        <span>
                          {' '}
                          Sponsors are promoters of projects in Africa. A Sponsor must have a valid
                          business entity registered with approapriate local authorities in the
                          country of operation;
                        </span>
                      </p>
                      <p dir='ltr'>
                        <span className='text-gray-800 text-uppercase'>ENABLER</span>{' '}
                        <span>
                          {' '}
                          - Enablers can be individuals, professionals, or businesses interested in
                          enabling opportunities from a particular Sponsor. Offerings could be
                          financing, professional service, or partnership. Enablers must be resident
                          in an OECD country.
                        </span>
                      </p>
                      <p dir='ltr'>
                        <span className='text-gray-800 text-uppercase'>Teaming Arrangement </span>{' '}
                        <span>
                          {' '}
                          - Our teaming arrangement begins when a Sponsor identifies a potential
                          Enabler to engage. Diasprex initiates the process offline upon successful
                          due diligence on both parties
                        </span>
                      </p>
                      <p dir='ltr'>
                        <span className='text-gray-800 text-uppercase'>Financing </span>{' '}
                        <span>
                          {' '}
                          - Our financing can be either equity or debt instrument. Diasprex
                          financing relies mainly on Diasporas financing resources. Every
                          opportunity submission can request financing but only outstanding ones are
                          selected for financing.
                        </span>
                      </p>
                      <p>
                        <span>
                          <span>&nbsp;</span>
                        </span>
                      </p>
                    </div>
                    <div className='row-sm d-flex'>
                      <span className='text-gray-800 text-uppercase'>
                        How it works for Sponsors
                      </span>
                    </div>
                    <div className='row-sm d-flex flex-wrap mb-10 mt-10'>
                      <FlowThumbnail1
                        classname='col-sm m-3'
                        tagnumber={1}
                        label='Register/Login'
                        icon='/media/svg/diasprex_icons/icon-4-dark.svg'
                      />
                      <div className='col-sm d-flex align-items-center px-5'>
                        <div className='text-center mb-10 mb-md-0'>
                          <KTSVG
                            path={toAbsoluteUrl('/media/icons/duotune/arrows/arr024.svg')}
                            className={`svg-icon-1 svg-icon svg-icon-2tx`}
                          />
                        </div>
                      </div>
                      <FlowThumbnail1
                        classname='col-sm m-3'
                        tagnumber={2}
                        label='Verification'
                        icon='/media/svg/diasprex_icons/icon-20.svg'
                      />
                      <div className='col-sm d-flex align-items-center px-5'>
                        <div className='text-center mb-10 mb-md-0'>
                          <KTSVG
                            path={toAbsoluteUrl('/media/icons/duotune/arrows/arr024.svg')}
                            className={`svg-icon-1 svg-icon svg-icon-2tx`}
                          />
                        </div>
                      </div>
                      <FlowThumbnail1
                        classname='col-sm m-3'
                        tagnumber={3}
                        label='Profile Setup'
                        icon='/media/svg/diasprex_icons/icon-10.svg'
                      />
                      <div className='col-sm d-flex align-items-center px-5'>
                        <div className='text-center mb-10 mb-md-0'>
                          <KTSVG
                            path={toAbsoluteUrl('/media/icons/duotune/arrows/arr024.svg')}
                            className={`svg-icon-1 svg-icon svg-icon-2tx`}
                          />
                        </div>
                      </div>
                      <FlowThumbnail1
                        classname='col-sm m-3'
                        tagnumber={4}
                        label='Submit Opportunities'
                        icon='/media/svg/diasprex_icons/icon-26.svg'
                      />

                      <div className='col-sm d-flex align-items-center px-5'>
                        <div className='text-center mb-10 mb-md-0'>
                          <KTSVG
                            path={toAbsoluteUrl('/media/icons/duotune/arrows/arr024.svg')}
                            className={`svg-icon-1 svg-icon svg-icon-2tx`}
                          />
                        </div>
                      </div>
                      <FlowThumbnail1
                        classname='col-sm m-3'
                        tagnumber={5}
                        label='Review Proposals'
                        icon='/media/svg/diasprex_icons/icon-16.svg'
                      />
                      <div className='col-sm d-flex align-items-center px-5'>
                        <div className='text-center mb-10 mb-md-0'>
                          <KTSVG
                            path={toAbsoluteUrl('/media/icons/duotune/arrows/arr024.svg')}
                            className={`svg-icon-1 svg-icon svg-icon-2tx`}
                          />
                        </div>
                      </div>
                      <FlowThumbnail1
                        classname='col-sm m-3'
                        tagnumber={6}
                        label='Partner Selection'
                        icon='/media/svg/diasprex_icons/icon-25.svg'
                      />
                    </div>
                    <div className='row-sm d-flex'>
                      <ol>
                        <li dir='ltr'>
                          <p dir='ltr'>
                            <span>
                              Login to your sponsor&rsquo;s account or Register to become a sponsor.
                              A Sponsor is typically a business or an organization from Africa.
                              First time Sponsor registration is a request for Diasprex to initiate
                              the process of becoming a Sponsor. You will proofs of your business or
                              organization legitimacy and point of contacts to complete the
                              registration
                            </span>
                          </p>
                        </li>
                        <li dir='ltr'>
                          <p dir='ltr'>
                            <span>
                              After submitting your registration to become a Sponsor, Diasprex
                              admin&nbsp; will initiate the vetting process to validate the
                              legitimacy of your organization. The vetting process involves multiple
                              steps and could take 4-6 weeks to complete. Upon a successful
                              verification of your business or organization, Diasprex will notify
                              you with the credential to login to your account
                            </span>
                          </p>
                        </li>
                        <li dir='ltr'>
                          <p dir='ltr'>
                            <span>
                              After receiving your login credentials from Diasprex, you will be able
                              to change your password, change your authentication settings, and
                              build your business or organization profile.
                            </span>
                          </p>
                        </li>
                        <li dir='ltr'>
                          <p dir='ltr'>
                            <span>
                              You can then create and submit Opportunities using our opportunity
                              submission tools within your profile. Creating an opportunity
                              typically requires a one-pager describing, without any proprietary
                              information:
                            </span>
                          </p>
                          <ul>
                            <li>
                              <p dir='ltr'>
                                <span>
                                  the problem or project that you or your organization would like to
                                  solve in Africa
                                </span>
                              </p>
                            </li>
                            <li>
                              <p dir='ltr'>
                                <span>the business opportunities</span>
                              </p>
                            </li>
                            <li>
                              <p dir='ltr'>
                                <span>and the type of partnership you are seeking</span>
                              </p>
                            </li>
                          </ul>
                          <p dir='ltr'>
                            <span>
                              Our team will be available to assist with building your opportunity
                              campaign to ensure it meets Diasprex&rsquo;s criteria and appeals to
                              our community of Enablers.&nbsp; An opportunity may be submitted with
                              or without financing. Submitted opportunities are routed through our
                              team for verification and approval before it is published. If your
                              opportunity is not approved for publication, our team will contact you
                              and advise on how to improve your submission. You can re-submit your
                              revised opportunities as many times as possible.
                            </span>
                          </p>
                        </li>
                        <li dir='ltr'>
                          <p dir='ltr'>
                            <span>
                              Review proposals. You can start reviewing proposals for your
                              opportunities as soons as they are received. However, you will not be
                              able to make selections until after the opportunity&rsquo;s due date
                            </span>
                          </p>
                        </li>
                        <li dir='ltr'>
                          <p dir='ltr'>
                            <span>
                              Shortlist 3-5 proposals you would like to consider for potential
                              teaming arrangements. You can request Diasprex service for screening
                              and shortlisting the proposals. This list is passed to the Diasprex
                              team for review and initiation of the teaming discussions.
                            </span>
                          </p>
                        </li>
                      </ol>
                    </div>

                    <div className='row-sm d-flex'>
                      <p dir='ltr'>
                        <span className='text-gray-800 text-uppercase'>
                          How it works for Enablers -
                        </span>
                        <span>&nbsp;</span>
                      </p>
                    </div>
                    <div className='row-sm d-flex flex-wrap mb-10 mt-10'>
                      <FlowThumbnail1
                        classname='col-sm m-3'
                        tagnumber={1}
                        label='Register/Login'
                        icon='/media/svg/diasprex_icons/icon-4-dark.svg'
                      />
                      <div className='col-sm d-flex align-items-center px-5'>
                        <div className='text-center mb-10 mb-md-0'>
                          <KTSVG
                            path={toAbsoluteUrl('/media/icons/duotune/arrows/arr024.svg')}
                            className={`svg-icon-1 svg-icon svg-icon-2tx`}
                          />
                        </div>
                      </div>

                      <FlowThumbnail1
                        classname='col-sm m-3'
                        tagnumber={2}
                        label='Review Opportunities'
                        icon='/media/svg/diasprex_icons/icon-2-red-yellow.svg'
                      />
                      <div className='col-sm d-flex align-items-center px-5'>
                        <div className='text-center mb-10 mb-md-0'>
                          <KTSVG
                            path={toAbsoluteUrl('/media/icons/duotune/arrows/arr024.svg')}
                            className={`svg-icon-1 svg-icon svg-icon-2tx`}
                          />
                        </div>
                      </div>
                      <FlowThumbnail1
                        classname='col-sm m-3'
                        tagnumber={3}
                        label='Submit Proposals'
                        icon='/media/svg/diasprex_icons/icon-23.svg'
                      />

                      <div className='col-sm d-flex align-items-center px-5'>
                        <div className='text-center mb-10 mb-md-0'>
                          <KTSVG
                            path={toAbsoluteUrl('/media/icons/duotune/arrows/arr024.svg')}
                            className={`svg-icon-1 svg-icon svg-icon-2tx`}
                          />
                        </div>
                      </div>
                      <FlowThumbnail1
                        classname='col-sm m-3'
                        tagnumber={4}
                        label='Notification'
                        icon='/media/svg/diasprex_icons/icon-28.svg'
                      />
                    </div>

                    <div className='row-sm d-flex'>
                      <ol>
                        <li dir='ltr'>
                          <p dir='ltr'>
                            <span>
                              Login or Register to see all open opportunities. Enablers are
                              typically individuals, businesses, or organizations from OECD
                              countries. Learn more about how to become an Enabler (Link to
                              instructions on how to subscribe as an enabler)
                            </span>
                          </p>
                        </li>
                        <li dir='ltr'>
                          <p dir='ltr'>
                            <span>
                              Review Opportunities: Review details of opportunites. The level of
                              details you can access varies by your subscription and the opportunity
                              type. You will also need to accept the Opportunity Disclosure
                              Agreement (ODA) and our Terms of Use. Find out more about ODAs here
                              (link to ODAs). Develop your proposal for an Opportunity interest. The
                              required deliverables typically include a proposal, biosketch,
                              references, and optional samples of prior relevant activities. For any
                              questions, message the Diasprex support team from within your account
                              profile
                            </span>
                          </p>
                        </li>
                        <li dir='ltr'>
                          <p dir='ltr'>
                            <span>
                              Submit Proposal: Submit your proposal before the Opportunity&rsquo;s
                              deadline. When submitting for multiple opportunities, each opportunity
                              must be treated separately. Only Diasprex and the Sponsor of that
                              Opportunity can view your proposal.
                            </span>
                          </p>
                        </li>
                        <li dir='ltr'>
                          <p dir='ltr'>
                            <span>
                              Notification: After the Opportunity&rsquo;s deadline, the Sponsor will
                              evaluate all proposal submissions.. Once this stage is completed, you
                              will be notified via email as to whether or not your submission has
                              been selected for the next stage, which is typically a teaming
                              arrangement.
                            </span>
                          </p>
                        </li>
                      </ol>
                    </div>
                    <div className='row-sm d-flex'>
                      <p dir='ltr'>
                        <span className='text-gray-800 text-uppercase'>
                          How teaming arrangements (TA) work -&nbsp;
                        </span>
                      </p>
                    </div>

                    <div className='row-sm d-flex flex-wrap mb-10 mt-10'>
                      <FlowThumbnail1
                        classname='col-sm m-3'
                        tagnumber={1}
                        label='Proposal Selected'
                        icon='/media/svg/diasprex_icons/icon-20-blue.svg'
                      />
                      <div className='col-sm d-flex align-items-center px-5'>
                        <div className='text-center mb-10 mb-md-0'>
                          <KTSVG
                            path={toAbsoluteUrl('/media/icons/duotune/arrows/arr024.svg')}
                            className={`svg-icon-1 svg-icon svg-icon-2tx`}
                          />
                        </div>
                      </div>

                      <FlowThumbnail1
                        classname='col-sm m-3'
                        tagnumber={2}
                        label='Sponsor-Enabler Meeting'
                        icon='/media/svg/diasprex_icons/icon-67.svg'
                      />
                      <div className='col-sm d-flex align-items-center px-5'>
                        <div className='text-center mb-10 mb-md-0'>
                          <KTSVG
                            path={toAbsoluteUrl('/media/icons/duotune/arrows/arr024.svg')}
                            className={`svg-icon-1 svg-icon svg-icon-2tx`}
                          />
                        </div>
                      </div>
                      <FlowThumbnail1
                        classname='col-sm m-3'
                        tagnumber={3}
                        label='Due Diligence'
                        icon='/media/svg/diasprex_icons/icon-1.svg'
                      />

                      <div className='col-sm d-flex align-items-center px-5'>
                        <div className='text-center mb-10 mb-md-0'>
                          <KTSVG
                            path={toAbsoluteUrl('/media/icons/duotune/arrows/arr024.svg')}
                            className={`svg-icon-1 svg-icon svg-icon-2tx`}
                          />
                        </div>
                      </div>
                      <FlowThumbnail1
                        classname='col-sm m-3'
                        tagnumber={4}
                        label='Sign Agreement'
                        icon='/media/svg/diasprex_icons/icon-46.svg'
                      />
                    </div>
                    <div className='row-sm d-flex flex-column'>
                      <ol>
                        <li dir='ltr'>
                          <p dir='ltr'>
                            <span>
                              The teaming arrangement begins after the Sponsor has shortlisted the
                              top candidates for their Opportunity. The goal of the TA process is to
                              arrive at the final Enabler to work with the Sponsor. This process can
                              take x - y weeks to complete. The TA process includes:
                            </span>
                          </p>
                        </li>
                        <li>
                          <p dir='ltr'>
                            <span>Due Diligence</span>
                            <span>
                              : Diasprex team and the Sponsor conducts their due diligence to ensure
                              no conflict of interest or IP infringement.
                            </span>
                          </p>
                        </li>
                        <li>
                          <p dir='ltr'>
                            <span>Planning</span>
                            <span>
                              : The planning process typically involves the Sponsor, Enabler, and
                              Diasprex team to develop a plan for execution and compensation.
                            </span>
                          </p>
                        </li>
                        <li>
                          <p dir='ltr'>
                            <span>Execution</span>
                            <span>
                              : The opportunity moves to execution with or without Diasprex
                              involvement
                            </span>
                          </p>
                        </li>
                      </ol>
                    </div>

                    <div className='row-sm d-flex'>
                      <p dir='ltr'>
                        <span className='text-gray-800 text-uppercase'>How financing works</span>
                      </p>
                    </div>

                    <div className='row-sm d-flex flex-wrap mb-10 mt-10'>
                      <FlowThumbnail1
                        classname='col-sm m-3'
                        tagnumber={1}
                        label='Request Financing'
                        icon='/media/svg/diasprex_icons/icon-20-blue.svg'
                      />
                      <div className='col-sm d-flex align-items-center px-5'>
                        <div className='text-center mb-10 mb-md-0'>
                          <KTSVG
                            path={toAbsoluteUrl('/media/icons/duotune/arrows/arr024.svg')}
                            className={`svg-icon-1 svg-icon svg-icon-2tx`}
                          />
                        </div>
                      </div>

                      <FlowThumbnail1
                        classname='col-sm m-3'
                        tagnumber={2}
                        label='Due Diligence'
                        icon='/media/svg/diasprex_icons/icon-1.svg'
                      />

                      <div className='col-sm d-flex align-items-center px-5'>
                        <div className='text-center mb-10 mb-md-0'>
                          <KTSVG
                            path={toAbsoluteUrl('/media/icons/duotune/arrows/arr024.svg')}
                            className={`svg-icon-1 svg-icon svg-icon-2tx`}
                          />
                        </div>
                      </div>
                      <FlowThumbnail1
                        classname='col-sm m-3'
                        tagnumber={3}
                        label='Decision'
                        icon='/media/svg/diasprex_icons/icon-46.svg'
                      />
                    </div>

                    <p dir='ltr'>
                      <span>
                        Sponsored opportunities may or may not already have financing. For
                        opportunities with existing financing, the Sponsor is responsible for
                        structuring and deploying the financing. Opportunities without financing can
                        apply for Diasprex&rsquo;s DIF. DIF financing is highly competitive and is
                        based on availability of funds. You can learn more about Diasprex DIF here
                        (link to DIF info page).
                      </span>
                    </p>
                    <p>
                      <span>&nbsp;</span>
                    </p>
                  </div>
                </div>
                <div className='row mb-12'>
                  <div className='col-md-6 pe-md-10 mb-10 mb-md-0'>
                    <h2 className='text-gray-800 fw-bolder mb-4'>BECOMING A MEMBER</h2>
                    <div className='m-0'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_4_1'
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
                          How do I join the Diasprex Marketplace as a new basic user?
                        </h4>
                      </div>
                      <div id='kt_job_4_1' className='collapse show fs-6 ms-1'>
                        <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                          <p>To register for a basic account:</p>
                          <p>To register for a basic account:</p>
                          <ol>
                            <li>
                              <p>Go to Diasprex sign up page</p>
                            </li>
                            <li>
                              <p>Follow the instruction for completing the sign up form</p>
                            </li>
                            <li>
                              <p>
                                Create a password. You will be guided to ensure you create a strong
                                password to protect your account.
                              </p>
                            </li>
                            <li>
                              <p>Click the Submit button.</p>
                            </li>
                            <li>
                              <p>
                                After you complete the sign up form, you will receive an email
                                notification confirming your registration and containing
                                instructions to activate your account.
                              </p>
                            </li>
                          </ol>
                          <p>
                            Note: A basic user account has limited access<br></br>
                          </p>
                          <p></p>
                        </div>
                      </div>
                      <div className='separator separator-dashed'></div>
                    </div>
                    <div className='m-0'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_4_2'
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
                          How do I join the Diasprex Marketplace and register a new Sponsor’s
                          account?
                        </h4>
                      </div>
                      <div id='kt_job_4_2' className='collapse fs-6 ms-1'>
                        <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                          <p dir='ltr'>
                            <span>To register for a Sponsor account:</span>
                          </p>
                          <ol>
                            <li dir='ltr'>
                              <p dir='ltr'>
                                <span>
                                  Sign in or register for a basic user account to your user account
                                </span>
                              </p>
                            </li>
                            <li dir='ltr'>
                              <p dir='ltr'>
                                <span>Go to the subscription page.</span>
                              </p>
                            </li>
                            <li dir='ltr'>
                              <p dir='ltr'>
                                <span>Click Register for a Sponsor account</span>
                              </p>
                            </li>
                            <li dir='ltr'>
                              <p dir='ltr'>
                                <span>
                                  Follow the instructions for completing the Sponsor registration
                                  form. Complete all the required fields including.
                                </span>
                              </p>
                            </li>
                            <li dir='ltr'>
                              <p dir='ltr'>
                                <span>Click the Register button.</span>
                              </p>
                            </li>
                            <li dir='ltr'>
                              <p dir='ltr'>
                                <span>
                                  After you complete the registration form, you will receive an
                                  email notification confirming your registration and containing
                                  instructions for the next steps.
                                </span>
                              </p>
                            </li>
                          </ol>
                        </div>
                      </div>
                      <div className='separator separator-dashed'></div>
                    </div>
                    <div className='m-0'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_4_3'
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
                          How do I submit an Opportunity as a Sponsor?
                        </h4>
                      </div>
                      <div id='kt_job_4_3' className='collapse fs-6 ms-1'>
                        <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                          <p dir='ltr'>
                            <span>To submit a Proposal to an Opportunity</span>
                          </p>
                          <ol>
                            <li dir='ltr'>
                              <p dir='ltr'>
                                <span>Go to the Diasprex login page.</span>
                              </p>
                            </li>
                          </ol>
                        </div>
                      </div>
                      <div className='separator separator-dashed'></div>
                    </div>
                    <div className='m-0'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_4_4'
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
                          How do I join the Diasprex Marketplace and register a new Enabler’s
                          account?
                        </h4>
                      </div>
                      <div id='kt_job_4_4' className='collapse fs-6 ms-1'>
                        <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                          To register for an Enabler’s account:
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 ps-md-10'>
                    <h2 className='text-gray-800 fw-bolder mb-4'>SUBMITTING SHOW OF INTEREST</h2>
                    <div className='m-0'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_5_1'
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
                          How do I submit a Proposal to an Opportunity as an Enabler?
                        </h4>
                      </div>
                      <div id='kt_job_5_1' className='collapse show fs-6 ms-1'>
                        <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                          <p dir='ltr'>
                            <span>To submit a Proposal to an Opportunity:</span>
                          </p>
                          <ol>
                            <li dir='ltr'>
                              <p dir='ltr'>
                                <span>Go to the Diasprex login page.</span>
                              </p>
                            </li>
                            <li dir='ltr'>
                              <p dir='ltr'>
                                <span>Log in using your user name and password.</span>
                              </p>
                            </li>
                            <li dir='ltr'>
                              <p dir='ltr'>
                                <span>
                                  Search and click on one of the Opportunities in the Opportunity
                                  page. You can also select&nbsp; from your list of Opportunities
                                  saved to your Profile
                                </span>
                              </p>
                            </li>
                            <li dir='ltr'>
                              <p dir='ltr'>
                                <span>
                                  Click the View Opportunity Details button and agree to the
                                  Opportunity Disclosure Agreement to activate the submission page.
                                </span>
                              </p>
                            </li>
                            <li dir='ltr'>
                              <p dir='ltr'>
                                <span>
                                  Type the summary of your proposal in the text tool on the proposal
                                  submission page.
                                </span>
                              </p>
                            </li>
                            <li dir='ltr'>
                              <p dir='ltr'>
                                <span>
                                  Answer any required questions and click the attachment button to
                                  upload your detailed proposal as a single PDF or Microsoft Word
                                  document.
                                </span>
                              </p>
                            </li>
                            <li dir='ltr'>
                              <p dir='ltr'>
                                <span>
                                  Click the Submit button and enter a name for your solution (please
                                  do not include personally identifying information in the title)
                                </span>
                              </p>
                            </li>
                            <li dir='ltr'>
                              <p dir='ltr'>
                                <span>
                                  You will receive an email confirmation to your registered email
                                  address
                                </span>
                              </p>
                            </li>
                          </ol>
                        </div>
                      </div>
                      <div className='separator separator-dashed'></div>
                    </div>
                    <div className='m-0'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_5_2'
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
                          How do I change my password?
                        </h4>
                      </div>
                      <div id='kt_job_5_2' className='collapse fs-6 ms-1'>
                        <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                          First, a disclaimer – the entire process of writing a blog post often
                          takes more than a couple of hours, even if you can type eighty words as
                          per minute and your writing skills are sharp.
                        </div>
                      </div>
                      <div className='separator separator-dashed'></div>
                    </div>
                    <div className='m-0'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_5_3'
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
                          How do I change my authentication settings?
                        </h4>
                      </div>
                      <div id='kt_job_5_3' className='collapse fs-6 ms-1'>
                        <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                          First, a disclaimer – the entire process of writing a blog post often
                          takes more than a couple of hours, even if you can type eighty words as
                          per minute and your writing skills are sharp.
                        </div>
                      </div>
                      <div className='separator separator-dashed'></div>
                    </div>
                    <div className='m-0'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_5_4'
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
                          My account is blocked. How do I re-activate it?
                        </h4>
                      </div>
                      <div id='kt_job_5_4' className='collapse fs-6 ms-1'>
                        <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                          First, a disclaimer – the entire process of writing a blog post often
                          takes more than a couple of hours, even if you can type eighty words as
                          per minute and your writing skills are sharp.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6 pe-md-10 mb-10 mb-md-0'>
                    <h2 className='text-gray-800 w-bolder mb-4'>RREMITTANCE RETAINER</h2>
                    <div className='m-0'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_6_1'
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
                          How do I change my subscription?
                        </h4>
                      </div>
                      <div id='kt_job_6_1' className='collapse show fs-6 ms-1'>
                        <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                          First, a disclaimer – the entire process of writing a blog post often
                          takes more than a couple of hours, even if you can type eighty words as
                          per minute and your writing skills are sharp.
                        </div>
                      </div>
                      <div className='separator separator-dashed'></div>
                    </div>
                    <div className='m-0'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_6_2'
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
                          How do I create a Diasprex DIF account?
                        </h4>
                      </div>
                      <div id='kt_job_6_2' className='collapse fs-6 ms-1'>
                        <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                          First, a disclaimer – the entire process of writing a blog post often
                          takes more than a couple of hours, even if you can type eighty words as
                          per minute and your writing skills are sharp.
                        </div>
                      </div>
                      <div className='separator separator-dashed'></div>
                    </div>
                    <div className='m-0'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_6_3'
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
                          How does Diasprex’s Remittance Retainer work?
                        </h4>
                      </div>
                      <div id='kt_job_6_3' className='collapse fs-6 ms-1'>
                        <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                          First, a disclaimer – the entire process of writing a blog post often
                          takes more than a couple of hours, even if you can type eighty words as
                          per minute and your writing skills are sharp.
                        </div>
                      </div>
                      <div className='separator separator-dashed'></div>
                    </div>
                    <div className='m-0'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_6_4'
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
                          Can I register for a Sponsor’s account as an individual?
                        </h4>
                      </div>
                      <div id='kt_job_6_4' className='collapse fs-6 ms-1'>
                        <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                          First, a disclaimer – the entire process of writing a blog post often
                          takes more than a couple of hours, even if you can type eighty words as
                          per minute and your writing skills are sharp.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 ps-md-10'>
                    <h2 className='text-gray-800 fw-bolder mb-4'>OTHER MARKETPLACE QUESTIONS</h2>
                    <div className='m-0'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_7_1'
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
                          What types of Opportunities can I submit to the Diasprex Marketplace?
                        </h4>
                      </div>
                      <div id='kt_job_7_1' className='collapse show fs-6 ms-1'>
                        <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                          First, a disclaimer – the entire process of writing a blog post often
                          takes more than a couple of hours, even if you can type eighty words as
                          per minute and your writing skills are sharp.
                        </div>
                      </div>
                      <div className='separator separator-dashed'></div>
                    </div>
                    <div className='m-0'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_7_2'
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
                          I am a diaspora and have a business or a company in Africa. Can I Sponsor
                          an Opportunity?
                        </h4>
                      </div>
                      <div id='kt_job_7_2' className='collapse fs-6 ms-1'>
                        <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                          First, a disclaimer – the entire process of writing a blog post often
                          takes more than a couple of hours, even if you can type eighty words as
                          per minute and your writing skills are sharp.
                        </div>
                      </div>
                      <div className='separator separator-dashed'></div>
                    </div>
                    <div className='m-0'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_7_3'
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
                          My opportunity is still an idea, does it qualify for the Diasprex’s
                          Marketplace?
                        </h4>
                      </div>
                      <div id='kt_job_7_3' className='collapse fs-6 ms-1'>
                        <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                          First, a disclaimer – the entire process of writing a blog post often
                          takes more than a couple of hours, even if you can type eighty words as
                          per minute and your writing skills are sharp.
                        </div>
                      </div>
                      <div className='separator separator-dashed'></div>
                    </div>
                    <div className='m-0'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_7_6'
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
                          I am primarily interested in financing an Opportunity, does it qualify for
                          Diasprex’s Marketplace?
                        </h4>
                      </div>
                      <div id='kt_job_7_6' className='collapse fs-6 ms-1'>
                        <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                          First, a disclaimer – the entire process of writing a blog post often
                          takes more than a couple of hours, even if you can type eighty words as
                          per minute and your writing skills are sharp.
                        </div>
                      </div>
                      <div className='separator separator-dashed'></div>
                    </div>
                    <div className='m-0'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_7_5'
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
                          I live in Africa. Can I register as an Enabler?
                        </h4>
                      </div>
                      <div id='kt_job_7_5' className='collapse fs-6 ms-1'>
                        <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                          First, a disclaimer – the entire process of writing a blog post often
                          takes more than a couple of hours, even if you can type eighty words as
                          per minute and your writing skills are sharp.
                        </div>
                      </div>
                      <div className='separator separator-dashed'></div>
                    </div>
                    <div className='m-0'>
                      <div
                        className='d-flex align-items-center collapsible py-3 toggle collapsed mb-0'
                        data-bs-toggle='collapse'
                        data-bs-target='#kt_job_7_4'
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
                          Must I register as an Enabler to view and submit proposals for an
                          opportunity
                        </h4>
                      </div>
                      <div id='kt_job_7_4' className='collapse fs-6 ms-1'>
                        <div className='mb-4 text-gray-600 fw-bold fs-6 ps-10'>
                          First, a disclaimer – the entire process of writing a blog post often
                          takes more than a couple of hours, even if you can type eighty words as
                          per minute and your writing skills are sharp.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mb-17'>
                <div className='d-flex flex-stack mb-5'>
                  <h3 className='text-dark'>Video Tutorials</h3>
                  <a href='#' className='fs-6 fw-bold link-primary'>
                    View All Videos
                  </a>
                </div>
                <div className='separator separator-dashed mb-9'></div>
                <div className='row g-10'>
                  <div className='col-md-4'>
                    <div className='card-xl-stretch me-md-6'>
                      <a
                        className='d-block bgi-no-repeat bgi-size-cover bgi-position-center card-rounded position-relative min-h-175px mb-5'
                        style={{backgroundImage: "url('media/stock/600x400/img-73.jpg')"}}
                        data-fslightbox='lightbox-video-tutorials'
                        href='https://www.youtube.com/embed/btornGtLwIo'
                      >
                        <img
                          src='media/svg/misc/video-play.svg'
                          className='position-absolute top-50 start-50 translate-middle'
                          alt=''
                        />
                      </a>
                      <div className='m-0'>
                        <a
                          href='../../demo1/dist/pages/user-profile/overview.html'
                          className='fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base'
                        >
                          Admin Panel - How To Started the Dashboard Tutorial
                        </a>
                        <div className='fw-bold fs-5 text-gray-600 text-dark my-4'>
                          We’ve been focused on making a the from also not been afraid to and step
                          away been focused create eye
                        </div>
                        <div className='fs-6 fw-bolder'>
                          <a
                            href='../../demo1/dist/pages/user-profile/overview.html'
                            className='text-gray-700 text-hover-primary'
                          >
                            Jane Miller
                          </a>
                          <span className='text-muted'>on Mar 21 2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='card-xl-stretch mx-md-3'>
                      <a
                        className='d-block bgi-no-repeat bgi-size-cover bgi-position-center card-rounded position-relative min-h-175px mb-5'
                        style={{backgroundImage: "url('media/stock/600x400/img-74.jpg')"}}
                        data-fslightbox='lightbox-video-tutorials'
                        href='https://www.youtube.com/embed/btornGtLwIo'
                      >
                        <img
                          src='media/svg/misc/video-play.svg'
                          className='position-absolute top-50 start-50 translate-middle'
                          alt=''
                        />
                      </a>
                      <div className='m-0'>
                        <a
                          href='../../demo1/dist/pages/user-profile/overview.html'
                          className='fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base'
                        >
                          Admin Panel - How To Started the Dashboard Tutorial
                        </a>
                        <div className='fw-bold fs-5 text-gray-600 text-dark my-4'>
                          We’ve been focused on making the from v4 to v5 but we have also not been
                          afraid to step away been focused
                        </div>
                        <div className='fs-6 fw-bolder'>
                          <a
                            href='../../demo1/dist/pages/user-profile/overview.html'
                            className='text-gray-700 text-hover-primary'
                          >
                            Cris Morgan
                          </a>
                          <span className='text-muted'>on Apr 14 2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='card-xl-stretch ms-md-6'>
                      <a
                        className='d-block bgi-no-repeat bgi-size-cover bgi-position-center card-rounded position-relative min-h-175px mb-5'
                        style={{backgroundImage: "url('media/stock/600x400/img-47.jpg')"}}
                        data-fslightbox='lightbox-video-tutorials'
                        href='https://www.youtube.com/embed/TWdDZYNqlg4'
                      >
                        <img
                          src='media/svg/misc/video-play.svg'
                          className='position-absolute top-50 start-50 translate-middle'
                          alt=''
                        />
                      </a>
                      <div className='m-0'>
                        <a
                          href='../../demo1/dist/pages/user-profile/overview.html'
                          className='fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base'
                        >
                          Admin Panel - How To Started the Dashboard Tutorial
                        </a>
                        <div className='fw-bold fs-5 text-gray-600 text-dark my-4'>
                          We’ve been focused on making the from v4 to v5 but we’ve also not been
                          afraid to step away been focused
                        </div>
                        <div className='fs-6 fw-bolder'>
                          <a
                            href='../../demo1/dist/pages/user-profile/overview.html'
                            className='text-gray-700 text-hover-primary'
                          >
                            Carles Nilson
                          </a>
                          <span className='text-muted'>on May 14 2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card mb-4 bg-light text-center'>
                <div className='card-body py-12'>
                  <a href='#' className='mx-4'>
                    <img
                      src={toAbsoluteUrl('/media/svg/brand-logos/linkedin-2.svg')}
                      className='h-30px my-2'
                      alt=''
                    />
                  </a>
                  <a href='#' className='mx-4'>
                    <img
                      src={toAbsoluteUrl('/media/svg/brand-logos/facebook-4.svg')}
                      className='h-30px my-2'
                      alt=''
                    />
                  </a>

                  <a href='#' className='mx-4'>
                    <img
                      src={toAbsoluteUrl('/media/svg/brand-logos/instagram-2-1.svg')}
                      className='h-30px my-2'
                      alt=''
                    />
                  </a>

                  {/* <a href='#' className='mx-4'>
                    <img
                      src={toAbsoluteUrl('/media/svg/brand-logos/github.svg')}
                      className='h-30px my-2'
                      alt=''
                    />
                  </a> */}

                  {/* <a href='#' className='mx-4'>
                    <img
                      src={toAbsoluteUrl('/media/svg/brand-logos/behance.svg')}
                      className='h-30px my-2'
                      alt=''
                    />
                  </a> */}

                  <a href='#' className='mx-4'>
                    <img
                      src={toAbsoluteUrl('/media/svg/brand-logos/pinterest-p.svg')}
                      className='h-30px my-2'
                      alt=''
                    />
                  </a>

                  <a href='#' className='mx-4'>
                    <img
                      src={toAbsoluteUrl('/media/svg/brand-logos/twitter.svg')}
                      className='h-30px my-2'
                      alt=''
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export {Faqs}
