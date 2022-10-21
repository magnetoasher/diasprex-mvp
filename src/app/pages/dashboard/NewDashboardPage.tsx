import React, { useState } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../_metronic/helpers'
import Opportunity from './Opportunity'
import Oppurtunity from './Opportunity'
import { Card, Row } from 'antd';
import BillingHistory from './BillingHistory';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
const NewDashboardPage = () => {
    var userTypeFull = localStorage.getItem("userTypeFull")
    var userType = localStorage.getItem("userType")

    const [dataObj] = useState([
        {
            name: 'Demo1',
            userTypeFull: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://loremflickr.com/g/320/240/things"

        },
        {
            name: 'Demo2',
            userTypeFull: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://loremflickr.com/g/320/241/things"

        },
        {
            name: 'Demo3',
            userTypeFull: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://loremflickr.com/g/320/242/things"

        },


    ])
    return (
        <Row justify='space-evenly'>
            <Card className='col-4'>
                <div
                    className='card-body p-4'>
                    <div className="d-flex justify-content-center align-items-center mb-2">
                        <div className="d-flex flex-column ">
                            <div className='me-7 mb-4'>
                                <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
                                    <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='Metornic' />
                                    <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <a
                                    href="#"
                                    className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                                >
                                    Max Smith
                                </a>

                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <a
                                    href="#"
                                    className="text-gray-800 text-hover-primary  me-1 text-capitalize"
                                >
                                    <span className = 'badge badge-success'>{userTypeFull?.replace("_", " ")} </span>
                                </a>

                            </div>

                            <br />
                            <div className="d-flex align-items-center mb-2">
                                <a
                                    href="#"
                                    className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                                >
                                    Contact
                                </a>

                            </div>
                            <div className=' mb-5 mb-xl-10' id='kt_profile_details_view'>


                                <div >




                                    <div className='row mb-7'>
                                        <label className='col-lg-5 fw-bolder '>
                                            Phone
                                            <i
                                                className='fas fa-exclamation-circle ms-1 fs-7'
                                                data-bs-toggle='tooltip'
                                                title='Phone number must be active'
                                            ></i>
                                        </label>

                                        <div className='col-lg-7 d-flex align-items-center'>
                                            <span className='fw-bold fs-6 me-2'>044 3276 454 935</span>
                                        </div>
                                    </div>
                                    <div className='row mb-7'>
                                        <label className='col-lg-5 fw-bolder '>Address</label>

                                        <div className='col-lg-7'>
                                            <a href='#' className='fw-bold fs-6 text-dark'>
                                                2777 Vera Cruz Ln N
                                            </a>
                                        </div>
                                    </div>
                                    <div className='row mb-7'>
                                        <label className='col-lg-5 fw-bolder '>Email</label>

                                        <div className='col-lg-7'>
                                            <a href='#' className='fw-bold fs-6 text-dark'>
                                                admin@dasprex.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className='row mb-7'>
                                        <label className='col-lg-5 fw-bolder '>Website</label>

                                        <div className='col-lg-7'>
                                            <a href='#' className='fw-bold fs-6 text-dark'>
                                                keenthemes.com
                                            </a>
                                        </div>
                                    </div>






                                </div>
                            </div>

                        </div>



                    </div>
                </div>
            </Card>

            <Card className='col-7 '>
                <div className='card mb-2 mb-xl-10' id='kt_profile_details_view'>
                    <div className='card-header cursor-pointer'>
                        <div className='card-title m-0'>
                            <h3 className='fw-bolder m-0'>Overview</h3>
                        </div>


                    </div>

                    <div className=' p-4'>
                        <div className='row mb-2'>
                            <label className='col-lg-12 fw-bolder  '>About</label>
                            <EditTextarea rows={5} defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" />
                        </div>
                        <div className='row mb-2 align-items-center'>
                            <label className='col-lg-3 fw-bolder '>
                                Industry

                            </label>

                            <div className='col-lg-7 d-flex align-items-start'>
                                <EditText defaultValue="Computer Software" />
                            </div>
                        </div>
                        <div className='row mb-7 align-items-center'>
                            <label className='col-lg-3 fw-bolder  '>
                                Specialties

                            </label>

                            <div className='col-lg-7 d-flex align-items-center'>
                                <EditText defaultValue="Web Development" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card mb-2 mb-xl-10' id='kt_profile_details_view'>
                    <div className='card-header cursor-pointer'>
                        <div className='card-title m-0'>
                            <h3 className='fw-bolder m-0'>Recent Opportunity Posts</h3>
                        </div>


                    </div>

                    <div className='card-body p-2 overflow-auto' style={{ height: '245px' }}>
                        {
                            dataObj.map((e) =>
                                <Opportunity name={e.name} userTypeFull={e.userTypeFull} title={e.title} detail={e.details} column={4} badgeColor="blue" badgeText="New" picSrc={e.src} />
                            )
                        }

                    </div>
                </div>
                {/* <div className="d-flex align-items-center mb-2">
                    <a
                        href="my_opportunity"
                        className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                    >

                        Followed Opportunities,
                    </a>

                </div> */}

                {
                    userType !== "sponsor" &&
                    <>
                        <div className="d-flex align-items-center mb-2 justify-content-end">
                            <a
                                role="button"
                                href="/my_opportunities"
                                className="btn btn-primary text-hover-white fw-bolder"
                            >

                                Followed Opportunities
                            </a>

                        </div>
                        <div className=' overflow-auto mt-5' style={{ height: '345px' }}>
                            <BillingHistory />

                        </div>
                    </>
                }

                {/* <div className='card mb-2 mb-xl-10' id='kt_profile_details_view'>
                    <div className='card-header cursor-pointer'>
                        <div className='card-title m-0'>
                            <h3 className='fw-bolder m-0'>Recent Remittance Activities</h3>
                        </div>


                    </div>

                    <div className=' overflow-auto' style={{ height: '245px' }}>
                        <BillingHistory />

                    </div>
                </div> */}
            </Card>
        </Row>

    )
}

export default NewDashboardPage