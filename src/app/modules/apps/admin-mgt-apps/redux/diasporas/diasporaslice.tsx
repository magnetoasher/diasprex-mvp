// @ts-nocheck comment
import {useEffect, useState, FC} from 'react'
import {uadFormModel} from '../../../../Diasporas/components/core/_model'
import axios, {AxiosResponse} from 'axios'
import {createSlice} from '@reduxjs/toolkit'
import {
  useQueryResponseLoading,
  useQueryResponseData,
} from '../../diasporas-management/diasporas-list/core/QueryResponseProvider'

// export const InitialState = () => {
//   const [profileList, setProfileList] = useState([])
//   const diasporasData = useQueryResponseData()
//   const isLoading = useQueryResponseLoading()
//   const profileData = useMemo(() => diasporasData, [diasporas])
//   if (!diasporasData || isLoading) {
//     return profileList
//   }
//   return setProfileList(profileData)
// }

const profileList = []
export const diasporaSlice = createSlice({
  name: 'diasporas',
  initialState: profileList,
  reducers: {
    profileAdded: (diasporas, action) => {
      diasporas.push(action.payload)
    },
    profilePublished: (diasporas, action) => {
      const index = diasporas.findIndex((profile) => profile.id === action.payload.id)
      diasporas[index].published = true
    },
    profileUpdated: (diasporas, action) => {
      diasporas.map((profile) => {})
    },
    profileDeclined: (diasporas, action) => {
      const index = diasporas.findIndex((profile) => profile.id === action.payload.id)
      diasporas[index].declined = true
    },
    profileDeleted: (diasporas, action) => {
      // profileList.map((profile)=> {profile.id !== actionChannel.payload.id})
    },
  },
})

export const {profileAdded, profilePublished, profileUpdated, profileDeclined, profileDeleted} =
  diasporaSlice.actions

export default diasporaSlice.reducer
