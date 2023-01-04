import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as auth from '../../app/modules/auth'
import * as opps from '../../app/modules/opportunities/redux/OpportunityRedux'
import diasporaReducer from '../../app/modules/apps/admin-mgt-apps/redux/diasporas/diasporaslice'

export const rootReducer = combineReducers({
  auth: auth.reducer,
  opps: opps.reducer,
  diasporas: diasporaReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([auth.saga(), opps.saga()])
}
