import {ID, Response} from '../../../../../../../_metronic/helpers'
import * as Yup from 'yup'

// type model for opportunities
export type Opps = {
  uuid?: ID
  id?: ID
  dpxid?: ID
  title?: string
  thumbnail?: string
  sponsorName?: string
  sponsorUserId?: string
  sponsorThumbnail?: string
  category?: string
  summary?: string
  oppdesc?: {
    marketneed?: string
    marketsize?: string
    productservices?: string
    devimpact?: string
    businessmodel?: string
    valueprop?: string
    gotomarket?: string
    competitor?: string
    complandscape?: string
    company?: string
    companyteam?: string
    diaspengagement?: string
    traction?: string
    nextmilestone?: string
    asks?: string
    exit?: string
  }

  country?: string
  datesubmitted?: string
  status?: string
  duedate?: string
  open?: boolean
  dealtype?: string[]
  otherdealtype?: string
  videourl?: string
  featuredopp?: boolean
  initials?: {
    label: string
    state: string
  }
  following?: string[]
  showedinterest?: string[]
  supporting?: string[]
  acknowledgedODA?: string[]
  attachment?: string
}

export type OppsQueryResponse = Response<Array<Opps>>

export type Feedback = {
  opportunityUuid?: ID
  enablerUserId?: ID
  message?: string
  status?: string
}

export type FeedbackQueryResponse = Response<Array<Feedback>>

export const initialOpps: Opps = {
  title: '',
  id: '',
  thumbnail: '',
  sponsorName: '',
  summary: '',
  status: '',
  datesubmitted: 'Todays Date',
  duedate: '',
  category: '',
  following: [],
  showedinterest: [],
}

export const createOppsSchemas = [
  Yup.object({
    accountType: Yup.string().required().label('Account Type'),
  }),

  // Create/edit opps validation schema
  Yup.object({
    category: Yup.string().required().label('Category'),
    duedate: Yup.string().required().label('Due Date'),
    dealtype: Yup.string().required().label('Deal Type'),
    title: Yup.string().required().label('Title'),
    summary: Yup.string().required().label('Opportunity summary'),
    oppsdesc: Yup.string().required().label('Opportunity detail'),
  }),
]

export const openBadgeColor = (oppData: Opps) => (oppData?.open ? 'success' : 'danger')
export const statusBadgeColor = (status: string) =>
  status === 'new'
    ? 'info'
    : status === 'published'
    ? 'success'
    : status === 'accepted'
    ? 'primary'
    : status === 'draft'
    ? 'gray-800'
    : status === 'not accepted'
    ? 'danger'
    : status === 'pending'
    ? 'gray-600'
    : status === 'completed'
    ? 'gray-800'
    : status === 'active'
    ? 'primary'
    : 'warning'
