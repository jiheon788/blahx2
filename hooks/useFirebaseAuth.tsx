import { IAuthUser } from '@/contexts/AuthUser.context';
import { useEffect, useState } from 'react';
import { GoogleAuthProvider, User, signInWithPopup } from 'firebase/auth';
import FirebaseClient from '@/models/FirebaseClient';

const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState<IAuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(FirebaseClient.getInstance().Auth, provider);
      if (res.user) {
        console.info(res.user);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const clear = () => {
    setAuthUser(null);
    setIsLoading(true);
  };

  const signOut = () => FirebaseClient.getInstance().Auth.signOut().then(clear);

  const authStateChanged = async (authState: User | null) => {
    if (authState === null) {
      setAuthUser(null);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setAuthUser({
      uid: authState.uid,
      email: authState.email,
      photoURL: authState.photoURL,
      displayName: authState.displayName,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    const unsubscribe = FirebaseClient.getInstance().Auth.onAuthStateChanged(authStateChanged);

    return () => unsubscribe();
  }, []);

  return {
    authUser,
    isLoading,
    signInWithGoogle,
    signOut,
  };
};

export default useFirebaseAuth;
