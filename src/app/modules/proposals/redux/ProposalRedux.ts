import {Action, Reducer} from '@reduxjs/toolkit'
import {put, takeLatest} from 'redux-saga/effects'
import {ID} from '../../../../_metronic/helpers/crud-helper/models'
import { Proposal, ProposalsQueryResponse } from '../../apps/admin-mgt-apps/proposal-management/props-list/core/_models'
import { getProposalsAPI, getProposalAPI, IQuery } from './ProposalAPI'

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const actionTypes = {
  GET_PROPOSALS_REQUEST: '[GetProposals] Request',
  GET_PROPOSALS_SUCCESS: '[GetProposals] Success',
  GET_PROPOSALS_FAILED: '[GetProposals] Failed',
  GET_PROPOSAL_REQUEST: '[GetProposal] Request',
  GET_PROPOSAL_SUCCESS: '[GetProposal] Success',
  GET_PROPOSAL_FAILED: '[GetProposal] Failed',
}

const initialState: IPropsState = {
  proposals: [],
  proposal: {},
  isLoading: false,
  error: null,
}

interface IQueryAction {
  type: string
  payload: IQuery
}

export interface IPropsState {
  proposals: Proposal[]
  proposal: Proposal
  isLoading: boolean
  error: string | null
}

export const reducer: Reducer = (state = initialState, action: ActionWithPayload<IPropsState>) => {
  switch (action.type) {
    case actionTypes.GET_PROPOSALS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.GET_PROPOSALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        proposals: action.payload,
      }
    case actionTypes.GET_PROPOSALS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case actionTypes.GET_PROPOSAL_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.GET_PROPOSAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        proposal: action.payload,
      }
    case actionTypes.GET_PROPOSAL_FAILED:
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
  getProposalsRequest: (query?: IQuery) => ({type: actionTypes.GET_PROPOSALS_REQUEST, payload: query}),
  getProposalsSuccess: (data: ProposalsQueryResponse) => ({
    type: actionTypes.GET_PROPOSALS_SUCCESS,
    payload: data,
  }),
  getProposalsFailed: (error: any) => ({type: actionTypes.GET_PROPOSALS_FAILED, payload: error}),
  getProposalRequest: (query?: IQuery) => ({type: actionTypes.GET_PROPOSAL_REQUEST, payload: query}),
  getProposalSuccess: (data: Proposal) => ({
    type: actionTypes.GET_PROPOSAL_SUCCESS,
    payload: data,
  }),
  getProposalFailed: (error: any) => ({type: actionTypes.GET_PROPOSAL_FAILED, payload: error}),
}

export function* saga() {
  yield takeLatest(
    actionTypes.GET_PROPOSALS_REQUEST,
    function* getProposals(action: IQueryAction) {
      try {
        const {data: data} = yield getProposalsAPI(action.payload)
        yield put(actions.getProposalsSuccess(data))
      } catch (error) {
        yield put(actions.getProposalsFailed(error))
      }
    }
  )
  yield takeLatest(
    actionTypes.GET_PROPOSAL_REQUEST,
    function* getProposal(action: IQueryAction) {
      try {
        const {data: data} = yield getProposalAPI(action.payload)
        yield put(actions.getProposalSuccess(data.data))
      } catch (error) {
        yield put(actions.getProposalFailed(error))
      }
    }
  )
}
