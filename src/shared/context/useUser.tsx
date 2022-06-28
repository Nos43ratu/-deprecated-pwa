import {
  useState,
  createContext,
  FC,
  ReactNode,
  useEffect,
  useContext,
} from "react";

const UserContext = createContext<UserContextType>({ id: "" });

interface UserContextType {
  id: string;
}

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvdier: FC<UserContextProviderProps> = ({
  children,
}) => {
  const [id, setId] = useState("");
  const { Provider } = UserContext;

  useEffect(() => {
    const storage = window.localStorage.getItem("userData");

    const data = JSON.parse(storage ?? "");
    if (data.id) {
      setId(data.id);
    }
  }, []);

  return <Provider value={{ id }}>{children}</Provider>;
};

export const useUser = () => useContext(UserContext);
