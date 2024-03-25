import Cookies from "js-cookie";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
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
  const storedAuth = Cookies.get("auth")
    ? JSON.parse(Cookies.get("auth") as string)
    : null;
  const [auth, setAuth] = useState<AuthData | null>(storedAuth);

  useEffect(() => {
    Cookies.set("auth", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
