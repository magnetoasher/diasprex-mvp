import React from 'react'
import { toAbsoluteUrl } from '../../../_metronic/helpers'
import "./opportunity.css"
import { Badge, Card } from 'antd';
const Opportunity = ({ name, userType, title, detail, column, badgeColor, badgeText, picSrc }: any) => {
    return (
        <Badge.Ribbon text={badgeText} color={badgeColor}>
            <Card className=' mb-2 box-shadow-style'>

                <div className=' p-1 row'>
                    <div className={`col-lg-${column}`}>
                        <div className='d-flex justify-content-start align-items-center' style={{ borderRight: '1px solid black' }}>
                            <div className='symbol symbol-50px symbol-lg-60px symbol-fixed position-relative me-3'>
                                <img src={picSrc} alt='Metornic' />
                                <div className='position-absolute translate-middle bottom-0 start-100 mb-6 border-white h-20px w-30px'></div>
                            </div>

                            <div className='d-flex flex-column'>
                                <div className="d-flex align-items-center mb-2">
                                    <a
                                        href="#"
                                        className="text-gray-800 text-capitalize fs-3 fw-bolder "
                                    >
                                        {name}
                                    </a>

                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <a
                                        href="#"
                                        className=" text-primary text-capitalize me-1"
                                    >
                                        {userType}
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <div className='d-flex flex-column'>
                            <div className="d-flex align-items-center mb-2">
                                <a
                                    href="#"
                                    className="text-gray-800  text-capitalize fs-2 fw-bolder me-1"
                                >
                                    {title}
                                </a>

                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <a
                                    href="#"
                                    className="text-gray-800   me-1"
                                >
                                    {detail}
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </Badge.Ribbon>
    )
}

export default Opportunity