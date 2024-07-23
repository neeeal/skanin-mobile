import React from 'react';
import { useStorageState } from './useStorageState';

const AuthContext = React.createContext<{
  signIn: (token: string, userId: string) => void;
  signOut: () => void;
  session?: { token: string | null, userId: string | null };
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: { token: null, userId: null },
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoadingToken, token], setToken] = useStorageState('token');
  const [[isLoadingUserId, userId], setUserId] = useStorageState('userId');

  const isLoading = isLoadingToken || isLoadingUserId;

  return (
    <AuthContext.Provider
      value={{
        signIn: (token: string, userId: string) => {
          setToken(token);
          setUserId(userId);
        },
        signOut: () => {
          setToken(null);
          setUserId(null);
        },
        session: { token, userId },
        isLoading,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
