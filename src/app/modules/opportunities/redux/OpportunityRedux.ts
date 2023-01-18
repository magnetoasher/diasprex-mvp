import {Action, Reducer} from '@reduxjs/toolkit'
import {put, takeLatest} from 'redux-saga/effects'
import {
  Feedback,
  FeedbackQueryResponse,
  Opps,
  OppsQueryResponse,
} from '../../apps/admin-mgt-apps/opp-management/opps-list/core/_models'
import {ID} from '../../../../_metronic/helpers/crud-helper/models'
import {getAllOppsAPI, getFeedbacksAPI, getOppByIdAPI, getSupportedOppsAPI} from './OpportunityAPI'
import {IQuery} from './OpportunityAPI'

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const actionTypes = {
  GET_ALL_OPPS_REQUEST: '[GetAllOpps] Request',
  GET_ALL_OPPS_SUCCESS: '[GetAllOpps] Success',
  GET_ALL_OPPS_FAILED: '[GetAllOpps] Failed',
  GET_OPP_BY_ID_REQUEST: '[GetOppById] Request',
  GET_OPP_BY_ID_SUCCESS: '[GetOppById] Success',
  GET_OPP_BY_ID_FAILED: '[GetOppById] Failed',
  GET_SUPPORTED_OPPS_REQUEST: '[GetSupportedOpps] Request',
  GET_SUPPORTED_OPPS_SUCCESS: '[GetSupportedOpps] Success',
  GET_SUPPORTED_OPPS_FAILED: '[GetSupportedOpps] Failed',
  GET_FEEDBACKS_REQUEST: '[GetFeedbacks] Request',
  GET_FEEDBACKS_SUCCESS: '[GetFeedbacks] Success',
  GET_FEEDBACKS_FAILED: '[GetFeedbacks] Failed',
}

const initialState: IOppsState = {
  opps: [],
  opp: {},
  feedbacks: [],
  isLoading: false,
  error: null,
}

interface IAction {
  type: string
  payload: ID
}

interface IQueryAction {
  type: string
  payload: IQuery
}

interface IFeedbackAction {
  type: string
  payload: Feedback
}

export interface IOppsState {
  opps: Opps[]
  opp: Opps
  feedbacks: Feedback[]
  isLoading: boolean
  error: string | null
}

export const reducer: Reducer = (state = initialState, action: ActionWithPayload<IOppsState>) => {
  switch (action.type) {
    case actionTypes.GET_ALL_OPPS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.GET_ALL_OPPS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        opps: action.payload,
      }
    case actionTypes.GET_ALL_OPPS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case actionTypes.GET_OPP_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.GET_OPP_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        opp: action.payload,
      }
    case actionTypes.GET_OPP_BY_ID_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case actionTypes.GET_SUPPORTED_OPPS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.GET_SUPPORTED_OPPS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        opps: action.payload,
      }
    case actionTypes.GET_SUPPORTED_OPPS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case actionTypes.GET_FEEDBACKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.GET_FEEDBACKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        feedbacks: action.payload,
      }
    case actionTypes.GET_FEEDBACKS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}

export const actions = {
  getAllOppsRequest: (query?: IQuery) => ({type: actionTypes.GET_ALL_OPPS_REQUEST, payload: query}),
  getAllOppsSuccess: (data: OppsQueryResponse) => ({
    type: actionTypes.GET_ALL_OPPS_SUCCESS,
    payload: data,
  }),
  getAllOppsFailed: (error: any) => ({type: actionTypes.GET_ALL_OPPS_FAILED, payload: error}),
  getOppByIdRequest: (id: ID) => ({type: actionTypes.GET_OPP_BY_ID_REQUEST, payload: id}),
  getOppByIdSuccess: (data: Opps) => ({type: actionTypes.GET_OPP_BY_ID_SUCCESS, payload: data}),
  getOppByIdFailed: (error: any) => ({type: actionTypes.GET_OPP_BY_ID_FAILED, payload: error}),
  getSupportedOppsRequest: (query?: IQuery) => ({type: actionTypes.GET_SUPPORTED_OPPS_REQUEST, payload: query}),
  getSupportedOppsSuccess: (data: OppsQueryResponse) => ({
    type: actionTypes.GET_SUPPORTED_OPPS_SUCCESS,
    payload: data,
  }),
  getSupportedOppsFailed: (error: any) => ({type: actionTypes.GET_SUPPORTED_OPPS_FAILED, payload: error}),
  getFeedbacksRequest: (params?: Feedback) => ({type: actionTypes.GET_FEEDBACKS_REQUEST, payload: params}),
  getFeedbacksSuccess: (data: FeedbackQueryResponse) => ({
    type: actionTypes.GET_FEEDBACKS_SUCCESS,
    payload: data,
  }),
  getFeedbacksFailed: (error: any) => ({type: actionTypes.GET_FEEDBACKS_FAILED, payload: error}),
}

export function* saga() {
  yield takeLatest(
    actionTypes.GET_ALL_OPPS_REQUEST,
    function* getAllOppsSaga(action: IQueryAction) {
      try {
        const {data: data} = yield getAllOppsAPI(action.payload)
        yield put(actions.getAllOppsSuccess(data))
      } catch (error) {
        yield put(actions.getAllOppsFailed(error))
      }
    }
  )
  yield takeLatest(actionTypes.GET_OPP_BY_ID_REQUEST, function* getOppByIdSaga(action: IAction) {
    try {
      const {data: data} = yield getOppByIdAPI(action.payload)
      yield put(actions.getOppByIdSuccess(data.data))
    } catch (error) {
      yield put(actions.getOppByIdFailed(error))
    }
  })
  yield takeLatest(actionTypes.GET_SUPPORTED_OPPS_REQUEST, function* getSupportedOppsSaga(action: IQueryAction) {
    try {
      const {data: data} = yield getSupportedOppsAPI(action.payload)
      yield put(actions.getOppByIdSuccess(data))
    } catch (error) {
      yield put(actions.getOppByIdFailed(error))
    }
  })
  yield takeLatest(actionTypes.GET_FEEDBACKS_REQUEST, function* getFeedbacksSaga(action: IFeedbackAction) {
    try {
      const {data: data} = yield getFeedbacksAPI(action.payload)
      yield put(actions.getFeedbacksSuccess(data.data))
    } catch (error) {
      yield put(actions.getFeedbacksFailed(error))
    }
  })
}
