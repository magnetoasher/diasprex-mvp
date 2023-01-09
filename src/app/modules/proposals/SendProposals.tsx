import React, {useState, useEffect} from 'react'
import {useDispatch, connect, ConnectedProps} from 'react-redux'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useOktaAuth} from '@okta/okta-react'
import {useFormik} from 'formik'
import {PageTitle, PageLink} from '../../../_metronic/layout/core'
import {Row, Col, Button, Input, Card, Form} from 'antd'
import {UploadOutlined, CameraOutlined} from '@ant-design/icons'
import {Upload} from 'antd'
import {
  createPropsSchemas,
  initialProposal,
} from '../apps/admin-mgt-apps/proposal-management/props-list/core/_models'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import '../../modules/opportunities/component/opportunity.css'
import * as opps from '../../modules/opportunities/redux/OpportunityRedux'
import {Opps} from '../apps/admin-mgt-apps/opp-management/opps-list/core/_models'
import {User} from '../apps/admin-mgt-apps/payment-management/payment-list/core/_models'
import Swal from 'sweetalert2'
import {RootState} from '../../../setup'

const mapState = (state: RootState) => ({opps: state.opps})
const connector = connect(mapState, opps.actions)
type PropsFromRedux = ConnectedProps<typeof connector>

const SendProposals: React.FC<PropsFromRedux> = (props) => {
  const {authState} = useOktaAuth()
  const {id: id} = useParams()
  const dispatch = useDispatch()
  const [status, setStatus] = useState('')
  const [oppData, setOppData] = useState<Opps>({})
  const [user, setUser] = useState<User>({})

  useEffect(() => {
    // axios
    //   .get(`${process.env.REACT_APP_DIASPREX_API_URL}/users/user/${authState?.accessToken?.claims.uid}`)
    //   .then((res) => console.log('user response', res))
    //   .catch((error) => error)
    dispatch(props.getOppByIdRequest(id))
  }, [])

  useEffect(() => {
    setOppData(props.opps.opp[0])
  }, [props.opps])

  const initVals = {
    title: '',
    summary: '',
    propdesc: '',
  }
  const formik = useFormik({
    initialValues: initVals,
    // validationSchema: createPropsSchemas,
    validateOnChange: false,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      const data =
        status === 'new'
          ? {
              ...values,
              id: `${oppData.uuid}/${authState?.accessToken?.claims.uid}`,
              status: status,
              opportunityUuid: oppData.uuid,
              opportunityObject: oppData,
              enablerUserId: authState?.accessToken?.claims.uid,
              enablerName: 'Glen Johnson', //This should be replaced with Enbaler's Firstname LastName
              sponsorUserId: oppData?.sponsorUserId,
              date_submitted: new Date(),
              country: 'United States', //This should be replaced with Enbaler's countryRes
            }
          : {values}
      try {
        await axios
          .post(`${process.env.REACT_APP_DIASPREX_API_URL}/proposals/create`, data)
          .then((res) => {
            console.log('Proposal', res.data)
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Your proposal is successfully submitted',
            })
          })
          .catch((error) => error)
      } catch (err) {
        console.log(formik.errors)
      } finally {
        formik.resetForm()
      }
    },
  })

  return (
    <>
      <PageTitle breadcrumbs={[]}>Send Proposal</PageTitle>
      <Card
        style={{
          boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        }}
      >
        <form>
          <div className='row px-10'>
            <div className='d-flex flex-column justify-content-start mb-10'>
              <h5>
                <b className=' fw-bolder text-uppercase text-primary fs-6 mb-2'>
                  Proposal submission form
                </b>
              </h5>
              <p className='fs-6 text-mute'>
                Please complete this form to submit your proposal for Opportunity DPX0000001
              </p>
            </div>
          </div>
          <div className='d-flex flex-column mb-5 fv-row'>
            <label className='fs-6 fw-bold mb-2'>Proposal Title</label>

            <input
              className='form-control'
              placeholder='Title'
              {...formik.getFieldProps('title')}
              name='title'
            />
            {formik.touched.title && formik.errors.title && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block text-danger'>
                  <span role='alert'>{formik.errors.title}</span>
                </div>
              </div>
            )}
          </div>
          <div className='d-flex flex-column mb-10 fv-row'>
            <label className='required fs-6 fw-bold mb-2'>Proposal Summary</label>
            <textarea
              className='form-control mb-2'
              rows={5}
              placeholder='Type the summary of your opportunity  (max of 500 characters)'
              {...formik.getFieldProps('summary')}
              name='summary'
              autoComplete='off'
              disabled={formik.isSubmitting}
            ></textarea>
            {formik.touched.summary && formik.errors.summary && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block text-danger'>
                  <span role='alert'>{formik.errors.summary}</span>
                </div>
              </div>
            )}
          </div>

          <div className='d-flex flex-column mb-10 fv-row'>
            <label className='required fs-6 fw-bold mb-2'>Proposal Detail</label>
            <textarea
              className='form-control mb-2'
              rows={5}
              placeholder='Please describe your offering in detail (max of 5000 characters)'
              {...formik.getFieldProps('propdesc')}
              name='propdesc'
              autoComplete='off'
              disabled={formik.isSubmitting}
            ></textarea>
            {formik.touched.propdesc && formik.errors.propdesc && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block text-danger'>
                  <span role='alert'>{formik.errors.propdesc}</span>
                </div>
              </div>
            )}
          </div>
          <div>
            <label className='mb-2'>
              Kindly upload an image thumbnail for the proposal and supporting documents in PDF or
              WORD format
            </label>

            <div className='fv-row d-flex flex-row'>
              <div style={{marginRight: '10px'}}>
                <Upload>
                  <Button
                    className='d-flex justify-content-center align-items-center'
                    icon={<UploadOutlined />}
                  >
                    Upload File
                  </Button>
                </Upload>
              </div>
              <div>
                <Upload>
                  <Button
                    className='d-flex justify-content-center align-items-center'
                    icon={<UploadOutlined />}
                  >
                    Upload Thumbnail
                  </Button>
                </Upload>
              </div>
            </div>
          </div>
          <div className='text-center pt-15'>
            <button type='reset' className='btn btn-light me-3' disabled={formik.isSubmitting}>
              Discard
            </button>
            <button
              type='button'
              className='btn btn-light-primary me-3'
              disabled={formik.isSubmitting}
              onClick={() => {
                setStatus('draft')
                formik.handleSubmit()
              }}
            >
              Save Draft
            </button>

            <button
              type='button'
              className='btn btn-primary'
              disabled={formik.isSubmitting}
              onClick={() => {
                setStatus('new')
                formik.handleSubmit()
              }}
            >
              <span className='indicator-label'>Submit</span>
              {formik.isSubmitting && (
                <span className='indicator-progress'>
                  Please wait...
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
          <div className='d-flex flex-column fv-row py-10'>
            <label style={{fontSize: '10px', fontWeight: '700', color: '#b6b6b6'}}>
              Disclaimer: Proposals submittted will be reviewed. Only selected proposals will be
              considered for further considerations
            </label>
          </div>
        </form>
      </Card>
    </>
  )
}

export default connector(SendProposals)
