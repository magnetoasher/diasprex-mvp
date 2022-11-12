import {createContext, FC, useContext} from 'react'
import {PublicNavBar} from './PublicNavBar'
import {useOktaAuth} from '@okta/okta-react'

import {PublicFooter} from './PublicFooter'
export const AuthStateContext: any = createContext({})
export const AuthStateContextProvider: FC = (props: any) => {
  const {authState} = useOktaAuth()

  return <AuthStateContext.Provider value={authState}>{props.children}</AuthStateContext.Provider>
}

export const PublicNavbarProvider: FC = (props: any) => {
  return (
    <div className='mh-100 align-items-stretch'>
      {/* <AuthStateContextProvider> */}
      <PublicNavBar />
      <main>{props.children}</main>
      <PublicFooter />
      {/* </AuthStateContextProvider> */}
    </div>
  )
}
