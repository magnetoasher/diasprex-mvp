import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { IProfile } from '../modules/auth/registration/components/CreateAccountWizardHelper'

export const profileContext = createContext<{
  loaded: boolean;
  setLoaded: Dispatch<SetStateAction<boolean>>;
  profile: IProfile | null;
  setProfile: Dispatch<SetStateAction<IProfile | null>>;
}>({
  loaded: false,
  setLoaded: () => {},
  profile: null,
  setProfile: () => {}
})

const ProfileProvider: React.FC = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const [profile, setProfile] = useState<IProfile | null>(null);

  return (
    <profileContext.Provider value={{loaded, setLoaded, profile, setProfile}}>
      {children}
    </profileContext.Provider>
  );
};

export default ProfileProvider;
