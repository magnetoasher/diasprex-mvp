import {Action} from '@reduxjs/toolkit'
import {put, takeLatest} from 'redux-saga/effects'
import {Opps, OppsQueryResponse} from '../../apps/admin-mgt-apps/opp-management/opps-list/core/_models'
import {getAllOppsAPI} from './OpportunityAPI'

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const actionTypes = {
  GET_ALL_OPPS_REQUEST: '[GetAllOpps] Request',
  GET_ALL_OPPS_SUCCESS: '[GetAllOpps] Success',
  GET_ALL_OPPS_FAILED: '[GetAllOpps] Failed',
}

const initialState: IOppsState = {
  opps: [],
  isLoading: false,
  error: null,
}

export interface IOppsState {
  opps: Opps[],
  isLoading: boolean,
  error: string | null,
}

export const reducer = (state = initialState, action: ActionWithPayload<IOppsState>) => {
  switch (action.type) {
    case actionTypes.GET_ALL_OPPS_REQUEST:
      return {
        ...state,
        isLoading: true
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
    default:
      return {
        ...state,
      }
  }
}

export const actions = {
  getAllOppsRequest: () => ({type: actionTypes.GET_ALL_OPPS_REQUEST}),
  getAllOppsSuccess: (data: OppsQueryResponse) => ({type: actionTypes.GET_ALL_OPPS_SUCCESS, payload: data}),
  getAllOppsFailed: (error: any) => ({type: actionTypes.GET_ALL_OPPS_FAILED, payload: error})
}

export function* saga() {
  yield takeLatest(actionTypes.GET_ALL_OPPS_REQUEST, function* getAllOppsSaga() {
    try {
      const { data: data } = yield getAllOppsAPI()
      yield put(actions.getAllOppsSuccess(data))
    } catch(error) {
      yield put(actions.getAllOppsFailed(error))
    }
  })
}
