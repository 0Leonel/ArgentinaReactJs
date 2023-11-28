import AuthProvider from '../../features/auth/provides/auth_provider';
export const RootProvider = ({children}) => {
    return <AuthProvider>{children}</AuthProvider>;
  };

