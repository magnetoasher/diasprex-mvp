import { useOktaAuth } from '@okta/okta-react'
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { IProfile } from '../modules/auth/registration/components/CreateAccountWizardHelper'

export const profileContext = createContext<{
  loaded: boolean;
  profile: IProfile | null;
}>({
  loaded: false,
  profile: null,
})

const ProfileProvider: React.FC = ({ children }) => {
  const [loaded, setLoaded] = useState(false)
  const [profile, setProfile] = useState<IProfile | null>(null)
  const { authState } = useOktaAuth()

  useEffect(() => {
    if (authState !== null && profile?.id !== authState.accessToken?.claims.uid && !loaded) {
      axios
        .get(
          `${process.env.REACT_APP_DIASPREX_API_URL}/profile/${authState.accessToken?.claims.uid}`
        )
        .then((res) => {
          const newProfile = res.data.data[0]
          setProfile(newProfile)
          setLoaded(true)
        });
    }
  }, [authState, profile, setProfile, loaded, setLoaded])

  return (
    <profileContext.Provider value={{loaded, profile}}>
      {children}
    </profileContext.Provider>
  )
}

export default ProfileProvider
