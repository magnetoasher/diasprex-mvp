import React, { useState } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../_metronic/helpers'
import Opportunity from './Opportunity'
import Oppurtunity from './Opportunity'
import { Card, Row } from 'antd';
const NewDashboardPage = () => {
    var userType = localStorage.getItem("userTypeFull")
    const [dataObj] = useState([
        {
            name: 'Demo1',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/180/140"

        },
        {
            name: 'Demo2',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/181/140"

        },
        {
            name: 'Demo3',
            userType: 'enabler',
            title: 'This is title',
            details: 'this is detail, lorem ispum',
            src: "https://picsum.photos/182/140"

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
                                    className="text-gray-800 text-hover-primary  me-1"
                                >
                                    {userType?.replace("_", " ")}
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
                <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
                    <div className='card-header cursor-pointer'>
                        <div className='card-title m-0'>
                            <h3 className='fw-bolder m-0'>Overview</h3>
                        </div>


                    </div>

                    <div className=' p-4'>
                        <div className='row mb-7'>
                            <label className='col-lg-12 fw-bolder  mb-5'>About</label>
                            <span className='fs-6 h-50px text-dark'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            </span>

                        </div>
                        <div className='row mb-7'>
                            <label className='col-lg-3 fw-bolder '>
                                Industry

                            </label>

                            <div className='col-lg-7 d-flex align-items-start'>
                                <span className='fw-bold fs-6 me-2'>Computer Software</span>
                            </div>
                        </div>
                        <div className='row mb-7'>
                            <label className='col-lg-3 fw-bolder  '>
                                Specialties

                            </label>

                            <div className='col-lg-7 d-flex align-items-center'>
                                <span className='fw-bold fs-6 me-2'>Web Development</span>
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
                                <Opportunity name={e.name} userType={e.userType} title={e.title} detail={e.details} column={4} badgeColor="blue" badgeText="New" picSrc={e.src} />
                            )
                        }

                    </div>
                </div>
            </Card>
        </Row>

    )
}

export default NewDashboardPage