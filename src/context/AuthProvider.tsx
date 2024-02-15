import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface AuthData {
  role: any;
  user: any;
  token: string;
  // Define the actual structure of your authentication data here
  // For example, username: string, isAuthenticated: boolean, etc.
}

interface AuthContextProps {
  auth: AuthData | null;
  setAuth: Dispatch<SetStateAction<AuthData | null>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const storedAuth = JSON.parse(localStorage.getItem("auth") as string) || null;
  const [auth, setAuth] = useState<AuthData | null>(storedAuth);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
