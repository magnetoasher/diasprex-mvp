import {Action, Reducer} from '@reduxjs/toolkit'
import {put, takeLatest} from 'redux-saga/effects'
import {
  Opps,
  OppsQueryResponse,
} from '../../apps/admin-mgt-apps/opp-management/opps-list/core/_models'
import {ID} from '../../../../_metronic/helpers/crud-helper/models'
import {getAllOppsAPI, getOppByIdAPI} from './OpportunityAPI'
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
}

const initialState: IOppsState = {
  opps: [],
  opp: {},
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

export interface IOppsState {
  opps: Opps[]
  opp: Opps
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
}
