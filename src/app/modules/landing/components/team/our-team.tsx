import React from 'react'
import {toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {TeamCard} from '../../core/team-card'

const Management = [
  {
    avatar: 'media/avatars/diasprex/dxp-9.jpg',
    fName: 'Peter',
    lName: 'Sarpong',
    title: 'M.S., MBA',
    role: 'V.P. Marketing',
    summary: `Mr Sarpong is a professional marketing... Mr Sarpong's African home country is Ghana`,
  },
  {
    avatar: 'media/avatars/diasprex/dxp-1.jpg',
    fName: 'Tosin',
    lName: 'Dada',
    title: 'Ph.D.',
    role: 'President',
    summary: `Dr Dada is a professional marketing... Dr Dada's African home country is Nigeria`,
  },
  {
    avatar: 'media/avatars/diasprex/dxp-8.jpg',
    fName: 'Seth',
    lName: 'Abelson',
    title: 'Ph.D.',
    role: 'V.P. Operation',
    summary: `Dr Abelson is a professional in finance... Dr Abelson's African home country is Nigeria`,
  },
  {
    avatar: 'media/avatars/diasprex/dxp-7.jpg',
    fName: 'Tosin Lara',
    lName: 'Dada',
    title: 'Ph.D.',
    role: 'V.P. Programs',
    summary: `Dr Dada is a professional marketing... Dr Dada's African home country is DRC`,
  },
  {
    avatar: 'media/avatars/diasprex/dxp-3.jpg',
    fName: 'Angela',
    lName: 'Kianga',
    title: 'M.S.',
    role: 'Product Manager',
    summary: `Mrs Kianga is a professional marketing... Mrs Kianga's African home country is Uganda`,
  },
]

const Advisory = [
  {
    avatar: 'media/avatars/diasprex/dxp-9.jpg',
    fName: 'Peter',
    lName: 'Sarpong',
    title: 'M.S., MBA',
    role: 'V.P. Marketing',
    summary: `Mr Sarpong is a professional marketing... Mr Sarpong's African home country is Ghana`,
  },
  {
    avatar: 'media/avatars/diasprex/dxp-1.jpg',
    fName: 'Tosin',
    lName: 'Dada',
    title: 'Ph.D.',
    role: 'President',
    summary: `Dr Dada is a professional marketing... Dr Dada's African home country is Nigeria`,
  },
  {
    avatar: 'media/avatars/diasprex/dxp-8.jpg',
    fName: 'Seth',
    lName: 'Abelson',
    title: 'Ph.D.',
    role: 'V.P. Operation',
    summary: `Dr Abelson is a professional in finance... Dr Abelson's African home country is Nigeria`,
  },
  ...Management,
]

export const OurTeam = () => {
  return (
    <div id='kt_app_content' className='app-content flex-column-fluid'>
      <div id='kt_app_content_container' className='app-container container-xxl'>
        <div className='card'>
          <div className='card-body p-lg-17'>
            <div className='mb-18'>
              <div className='mb-11'>
                <div className='text-center mb-18'>
                  <h3 className='fs-2hx text-dark mb-6'>Meet Our Team</h3>

                  <div className='fs-5 text-muted fw-semibold'>
                    Save thousands to millions of bucks by using single tool for different
                    <br />
                    amazing and outstanding and usefull great and useful admin
                  </div>
                </div>

                <div className='overlay'>
                  <img
                    className='w-100 card-rounded'
                    src={toAbsoluteUrl('media/stock/diasprex/aboutus.jpg')}
                    alt='Our Team'
                  />
                </div>
              </div>

              <div className='fs-5 fw-semibold text-gray-600'>
                <p className='m-0'>
                  First, a disclaimer – the entire process of writing a blog post often takes more
                  than a couple of hours, even if you can type eighty words per minute and your
                  writing skills are sharp. From the seed of the idea to finally hitting “Publish,”
                  you might spend several days or maybe even a week “writing” a blog post, but it’s
                  important to spend those vital hours planning your post and even thinking about
                  <a href='../../demo1/dist/pages/blog/post.html' className='link-primary pe-1'>
                    Your Post
                  </a>
                  (yes, thinking counts as working if you’re a blogger) before you actually write
                  it.
                </p>
              </div>
            </div>

            <div className='mb-18'>
              <div className='text-center mb-17'>
                <h3 className='fs-2hx text-dark mb-5'>Management Team</h3>

                <div className='fs-5 text-muted fw-semibold'>
                  It’s no doubt that when a development takes longer to complete, additional costs
                  to
                  <br />
                  integrate and test each extra feature creeps up and haunts most of us.
                </div>
              </div>

              <div className='row row-cols-1 row-cols-sm-2 row-cols-xl-4 gy-10'>
                {Management.map((team) => (
                  <TeamCard
                    bgshape='rounded-top'
                    avatar={team.avatar}
                    fName={team.fName}
                    lName={team.lName}
                    title={team.title}
                    role={team.role}
                    summary={team.summary}
                  />
                ))}
              </div>
            </div>

            <div className='mb-18 bg-light'>
              <div className='text-center mb-17'>
                <h3 className='fs-2hx text-dark mb-5'>Advisory Board</h3>

                <div className='fs-5 text-muted fw-semibold'>
                  It’s no doubt that when a development takes longer to complete, additional costs
                  to
                  <br />
                  integrate and test each extra feature creeps up and haunts most of us.
                </div>
              </div>

              <div className='row row-cols-1 row-cols-sm-2 row-cols-xl-4 gy-10'>
                {Advisory.map((team) => (
                  <TeamCard
                    bgshape='rounded-circle'
                    avatar={team.avatar}
                    fName={team.fName}
                    lName={team.lName}
                    title={team.title}
                    role={team.role}
                    summary={team.summary}
                  />
                ))}
              </div>
            </div>

            <div className='mb-18 bg-light'>
              <div className='text-center mb-17'>
                <h3 className='fs-2hx text-dark mb-5'>Board of Directors</h3>

                <div className='fs-5 text-muted fw-semibold'>
                  It’s no doubt that when a development takes longer to complete, additional costs
                  to
                  <br />
                  integrate and test each extra feature creeps up and haunts most of us.
                </div>
              </div>

              <div className='row row-cols-1 row-cols-sm-2 row-cols-xl-4 gy-10'>
                {Advisory.map((team) => (
                  <TeamCard
                    bgshape='rounded'
                    avatar={team.avatar}
                    fName={team.fName}
                    lName={team.lName}
                    title={team.title}
                    role={team.role}
                    summary={team.summary}
                  />
                ))}
              </div>
            </div>

            <div className='mb-18 bg-light'>
              <div className='text-center mb-17'>
                <h3 className='fs-2hx text-dark mb-5'>Diaspora Ambassadors</h3>

                <div className='fs-5 text-muted fw-semibold'>
                  It’s no doubt that when a development takes longer to complete, additional costs
                  to
                  <br />
                  integrate and test each extra feature creeps up and haunts most of us.
                </div>
              </div>

              <div className='row row-cols-1 row-cols-sm-2 row-cols-xl-4 gy-10'>
                {Advisory.map((team) => (
                  <TeamCard
                    bgshape='octagon'
                    avatar={team.avatar}
                    fName={team.fName}
                    lName={team.lName}
                    title={team.title}
                    role={team.role}
                    summary={team.summary}
                  />
                ))}
              </div>
            </div>

            <div className='text-center mb-20'>
              <div className='mb-13'>
                <h3 className='fs-2hx text-dark mb-5'>Join Us</h3>

                <div className='fs-5 text-muted fw-semibold'>
                  Save thousands to millions of bucks by using single tool
                  <br />
                  for different amazing and great useful admin
                </div>
              </div>

              <p className='fs-5 fw-semibold text-gray-600 text-start mb-15'>
                First, a disclaimer – the entire process of writing a blog post often takes more
                than a couple of hours, even if you can type eighty words per minute and your
                writing skills are sharp. From the seed of the idea to finally hitting “Publish,”
                you might spend several days or maybe even a week “writing” a blog post, but it’s
                important to spend those vital hours planning
                <a href='../../demo1/dist/pages/blog/post.html' className='link-primary pe-1'>
                  Your Post
                </a>
                (yes, thinking counts as working if you’re a blogger) before you actually write it.
              </p>

              <a href='../../demo1/dist/pages/careers/apply.html' className='btn btn-primary mb-5'>
                Apply Now
              </a>
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
  )
}
