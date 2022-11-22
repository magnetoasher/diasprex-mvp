import {useEffect, useState, FC} from 'react'
import {uadFormModel} from '../components/core/_model'
import axios, {AxiosResponse} from 'axios'
import {createSlice, nanoid} from '@reduxjs/toolkit'
import {prepareDataForValidation} from 'formik'

// const initialProfiles:uadFormModel[] = () => {

//     return(
//     axios
//         .get('http://localhost:3000/diasporas')
//     .then((res) => res.data)
//     )
// }

// Actions
// const PROFILE_ADDED = 'profileAdded'
// const PROFILE_DELETED = 'profileDeleted'
// const PROFILE_PUBBLISHED = 'profilePublished'
// const PROFILE_FEATURED = 'profileFeatured'

export const diasporaSlice = createSlice({
  name: 'diaspora',
  initialState: [{}],
  reducers: {
    profileAdded(state, action) {
      state.push(action.payload)
    },
  },

  //   reducers: {
  //       profileAdded: {
  //           reducer(state, action) {
  //       state.push(action.payload)
  //       },
  //           prepare(fullname) {
  //         return {
  //             payload: {
  //                 id: nanoid(),
  //                 fullname
  //             }
  //         }
  //     }},
  //   }
})

export const {profileAdded} = diasporaSlice.actions
export const selectAllProfiles = (state: any) => state.diasporas

export default diasporaSlice.reducer
