import {Action, Reducer} from '@reduxjs/toolkit'
import {put, takeLatest} from 'redux-saga/effects'
import {ID} from '../../../../_metronic/helpers/crud-helper/models'
import { IUserID, getUserProfileAPI } from './ProfileAPI'
import { User } from '../../apps/user-management-ignore/users-list/core/_models'

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const actionTypes = {
  GET_PROFILE_REQUEST: '[GetProfile] Request',
  GET_PROFILE_SUCCESS: '[GetProfile] Success',
  GET_PROFILE_FAILED: '[GetProfile] Failed',
}

const initialState: IPropsState = {
  userProfile: {},
  isLoading: false,
  error: null,
}

export interface IPropsState {
  userProfile: User
  isLoading: boolean
  error: string | null
}

interface IAction {
  type: string
  payload: IUserID
}

export const reducer: Reducer = (state = initialState, action: ActionWithPayload<IPropsState>) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userProfile: action.payload,
      }
    case actionTypes.GET_PROFILE_FAILED:
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
  getProfileRequest: (query?: IUserID) => ({type: actionTypes.GET_PROFILE_REQUEST, payload: query}),
  getProfileSuccess: (data: User) => ({
    type: actionTypes.GET_PROFILE_SUCCESS,
    payload: data,
  }),
  getProfileFailed: (error: any) => ({type: actionTypes.GET_PROFILE_FAILED, payload: error}),
}

export function* saga() {
  yield takeLatest(
    actionTypes.GET_PROFILE_REQUEST,
    function* getUserProfile(action: IAction) {
      try {
        const {data: data} = yield getUserProfileAPI(action.payload)
        yield put(actions.getProfileSuccess(data.data))
      } catch (error) {
        yield put(actions.getProfileFailed(error))
      }
    }
  )
}
