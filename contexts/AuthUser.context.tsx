import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import { createContext, useContext } from 'react';

export interface IAuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

interface IAuthUserContext {
  authUser: IAuthUser | null;
  isLoading: boolean;
  signInWithGoogle: () => void;
  signOut: () => void;
}

const AuthUserContext = createContext<IAuthUserContext>({
  authUser: null,
  isLoading: true,
  signInWithGoogle: async () => ({ user: null, credential: null }),
  signOut: () => {},
});

interface IAuthUserProviderProps {
  children: React.ReactNode;
}

export const AuthUserProvider = ({ children }: IAuthUserProviderProps) => {
  const auth = useFirebaseAuth();
  return <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>;
};

export const useAuth = () => useContext(AuthUserContext);
