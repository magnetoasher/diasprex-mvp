import React from 'react'

export const Statements = () => {
    return (
        <>
            <div className="card">
                {/* <!--begin::Card header--> */}
                <div className="card-header card-header-stretch border-bottom border-gray-200">
                    {/* <!--begin::Title--> */}
                    <div className="card-title">
                        <h3 className="fw-bolder m-0">Remittance Account Statements</h3>
                    </div>
                    {/* <!--end::Title--> */}
                    {/* <!--begin::Toolbar--> */}
                    <div className="card-toolbar m-0">
                        {/* <!--begin::Tab nav--> */}
                        <ul className="nav nav-stretch nav-line-tabs border-transparent" role="tablist">
                            {/* <!--begin::Tab nav item--> */}
                            <li className="nav-item" role="presentation">
                                <a id="kt_billing_6months_tab" className="nav-link fs-5 fw-bold me-3 active" data-bs-toggle="tab" role="tab" href="#kt_billing_months">Month</a>
                            </li>
                            {/* <!--end::Tab nav item--> */}
                            {/* <!--begin::Tab nav item--> */}
                            <li className="nav-item" role="presentation">
                                <a id="kt_billing_1year_tab" className="nav-link fs-5 fw-bold me-3" data-bs-toggle="tab" role="tab" href="#kt_billing_year">Year</a>
                            </li>
                            {/* <!--end::Tab nav item--> */}
                            {/* <!--begin::Tab nav item--> */}
                            <li className="nav-item" role="presentation">
                                <a id="kt_billing_alltime_tab" className="nav-link fs-5 fw-bold" data-bs-toggle="tab" role="tab" href="#kt_billing_all">All Time</a>
                            </li>
                            {/* <!--end::Tab nav item--> */}
                        </ul>
                        {/* <!--end::Tab nav--> */}
                    </div>
                    {/* <!--end::Toolbar--> */}
                </div>
                {/* <!--end::Card header--> */}
                {/* <!--begin::Tab Content--> */}
                <div className="tab-content">
                    {/* <!--begin::Tab panel--> */}
                    <div id="kt_billing_months" className="card-body p-0 tab-pane fade show active" role="tabpanel" aria-labelledby="kt_billing_months">
                        {/* <!--begin::Table container--> */}
                        <div className="table-responsive">
                            {/* <!--begin::Table--> */}
                            <table className="table table-row-bordered align-middle gy-4 gs-9">
                                <thead className="border-bottom border-gray-200 fs-6 text-gray-600 fw-bolder bg-light bg-opacity-75">
                                    <tr>
                                        <td className="min-w-150px">Date</td>

                                        <td className="min-w-150px">Download</td>
                                        
                                    </tr>
                                </thead>
                                <tbody className="fw-bold text-gray-600">
                                    {/* <!--begin::Table row--> */}
                                    <tr>
                                        <td>Nov 01, 2020</td>

                                        <td>
                                            <a href="#" className="btn btn-sm btn-light btn-active-light-primary">PDF</a>
                                        </td>
                                    </tr>
                                    {/* <!--end::Table row--> */}
                                    {/* <!--begin::Table row--> */}
                                    <tr>
                                        <td>Oct 08, 2020</td>

                                        <td>
                                            <a href="#" className="btn btn-sm btn-light btn-active-light-primary">PDF</a>
                                        </td>
                                       
                                    </tr>
                                    {/* <!--end::Table row--> */}
                                    {/* <!--begin::Table row--> */}
                                    <tr>
                                        <td>Aug 24, 2020</td>

                                        <td>
                                            <a href="#" className="btn btn-sm btn-light btn-active-light-primary">PDF</a>
                                        </td>
                                       
                                    </tr>
                                    {/* <!--end::Table row--> */}
                                    {/* <!--begin::Table row--> */}
                                    <tr>
                                        <td>Aug 01, 2020</td>

                                        <td>
                                            <a href="#" className="btn btn-sm btn-light btn-active-light-primary">PDF</a>
                                        </td>
                                      
                                    </tr>
                                    {/* <!--end::Table row--> */}
                                    {/* <!--begin::Table row--> */}
                                    <tr>
                                        <td>Jul 01, 2020</td>
                                       

                                        <td>
                                            <a href="#" className="btn btn-sm btn-light btn-active-light-primary">PDF</a>
                                        </td>
                                      
                                    </tr>
                                    {/* <!--end::Table row--> */}
                                    {/* <!--begin::Table row--> */}
                                    <tr>
                                        <td>Jun 17, 2020</td>

                                        <td>
                                            <a href="#" className="btn btn-sm btn-light btn-active-light-primary">PDF</a>
                                        </td>
                                        
                                    </tr>
                                    {/* <!--end::Table row--> */}
                                    {/* <!--begin::Table row--> */}
                                    <tr>
                                        <td>Jun 01, 2020</td>

                                        <td>
                                            <a href="#" className="btn btn-sm btn-light btn-active-light-primary">PDF</a>
                                        </td>
                                       
                                    </tr>
                                    {/* <!--end::Table row--> */}
                                </tbody>
                            </table>
                            {/* <!--end::Table--> */}
                        </div>
                        {/* <!--end::Table container--> */}
                    </div>
                    {/* <!--end::Tab panel--> */}
                    {/* <!--begin::Tab panel--> */}
                    <div id="kt_billing_year" className="card-body p-0 tab-pane fade" role="tabpanel" aria-labelledby="kt_billing_year">
                        {/* <!--begin::Table container--> */}
                        <div className="table-responsive">
                            {/* <!--begin::Table--> */}
                            <table className="table table-row-bordered align-middle gy-4 gs-9">
                                <thead className="border-bottom border-gray-200 fs-6 text-gray-600 fw-bolder bg-light bg-opacity-75">
                                    <tr>
                                        <td className="min-w-150px">Date</td>

                                        <td className="min-w-150px">Invoice</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody className="fw-bold text-gray-600">
                                    {/* <!--begin::Table row--> */}
                                    <tr>
                                        <td>Dec 01, 2021</td>

                                        <td>
                                            <a href="#" className="btn btn-sm btn-light btn-active-light-primary">PDF</a>
                                        </td>
                                       
                                    </tr>
                                    {/* <!--end::Table row--> */}
                                    {/* <!--begin::Table row--> */}
                                    <tr>
                                        <td>Oct 08, 2021</td>

                                        <td>
                                            <a href="#" className="btn btn-sm btn-light btn-active-light-primary">PDF</a>
                                        </td>
                                       
                                    </tr>
                                    {/* <!--end::Table row--> */}
                                    {/* <!--begin::Table row--> */}
                                    <tr>
                                        <td>Aug 24, 2021</td>

                                        <td>
                                            <a href="#" className="btn btn-sm btn-light btn-active-light-primary">PDF</a>
                                        </td>
                                       
                                    </tr>
                                    {/* <!--end::Table row--> */}
                                    {/* <!--begin::Table row--> */}
                                    <tr>
                                        <td>Aug 01, 2021</td>

                                        <td>
                                            <a href="#" className="btn btn-sm btn-light btn-active-light-primary">PDF</a>
                                        </td>
                                       
                                    </tr>
                                    {/* <!--end::Table row--> */}
                                    {/* <!--begin::Table row--> */}
                                    <tr>
                                        <td>Jul 01, 2021</td>

                                        <td>
                                            <a href="#" className="btn btn-sm btn-light btn-active-light-primary">PDF</a>
                                        </td>
                                       
                                    </tr>
                                    {/* <!--end::Table row--> */}
                                    {/* <!--begin::Table row--> */}
                                    <tr>
                                        <td>Jun 17, 2021</td>
                                        <td>
                                            <a href="#" className="btn btn-sm btn-light btn-active-light-primary">PDF</a>
                                        </td>
                                       
                                    </tr>
                                    {/* <!--end::Table row--> */}
                                </tbody>
                            </table>
                            {/* <!--end::Table--> */}
                        </div>
                        {/* <!--end::Table container--> */}
                    </div>
                    {/* <!--end::Tab panel--> */}
                    {/* <!--begin::Tab panel--> */}
                    <div id="kt_billing_all" className="card-body p-0 tab-pane fade" role="tabpanel" aria-labelledby="kt_billing_all">
                        {/* <!--begin::Table container--> */}
                        <div className="table-responsive">
                            {/* <!--begin::Table--> */}
                            <table className="table table-row-bordered align-middle gy-4 gs-9">
                                <thead className="border-bottom border-gray-200 fs-6 text-gray-600 fw-bolder bg-light bg-opacity-75">
                                    <tr>
                                        <td className="min-w-150px">Date</td>
                                        <td className="min-w-150px">Invoice</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody className="fw-bold text-gray-600">
                                    {/* <!--begin::Table row--> */}
                                    <tr>
                                        <td>Nov 01, 2021</td>

                                        <td>
                                            <a href="#" className="btn btn-sm btn-light btn-active-light-primary">PDF</a>
                                        </td>
                                    </tr>
                                    {/* <!--end::Table row--> */}
                                    {/* <!--begin::Table row--> */}
                                    <tr>
                                        <td>Aug 10, 2021</td>

                                        <td>
                                            <a href="#" className="btn btn-sm btn-light btn-active-light-primary">PDF</a>
                                        </td>
                                  
                                    </tr>
                                    {/* <!--end::Table row--> */}
                                    {/* <!--begin::Table row--> */}
                                    <tr>
                                        <td>Aug 01, 2021</td>

                                        <td>
                                            <a href="#" className="btn btn-sm btn-light btn-active-light-primary">PDF</a>
                                        </td>
                                       
                                    </tr>
                                    {/* <!--end::Table row--> */}
                                    {/* <!--begin::Table row--> */}
                                    <tr>
                                        <td>Jul 20, 2021</td>

                                        <td>
                                            <a href="#" className="btn btn-sm btn-light btn-active-light-primary">PDF</a>
                                        </td>
                                       
                                    </tr>
                                    {/* <!--end::Table row--> */}
                                    {/* <!--begin::Table row--> */}
                                    <tr>
                                        <td>Jun 17, 2021</td>

                                        <td>
                                            <a href="#" className="btn btn-sm btn-light btn-active-light-primary">PDF</a>
                                        </td>
                                     
                                    </tr>
                                   
                                    {/* <!--begin::Table row--> */}
                                    <tr>
                                        <td>Jun 01, 2021</td>
                                        <td>
                                            <a href="#" className="btn btn-sm btn-light btn-active-light-primary">PDF</a>
                                        </td>
                                    </tr>
                                    {/* <!--end::Table row--> */}
                                </tbody>
                            </table>
                            {/* <!--end::Table--> */}
                        </div>
                        {/* <!--end::Table container--> */}
                    </div>
                    {/* <!--end::Tab panel--> */}
                </div>
                {/* <!--end::Tab Content--> */}
            </div>
        </>
    )
}