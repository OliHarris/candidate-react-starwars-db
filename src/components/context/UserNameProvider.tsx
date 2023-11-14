// UserNameProvider.tsx
import { ReactNode, createContext, useState } from "react";

interface UserNameContextInterface {
  userName: string;
  setUserName: (value: string) => void;
}

export const UserNameContext = createContext<UserNameContextInterface>({
  userName: "",
  setUserName: () => {},
});

const UserNameProvider = (props: { children: ReactNode }) => {
  const [userName, setUserName] = useState<string>("Oli Harris");

  return (
    <UserNameContext.Provider value={{ userName, setUserName }}>
      {props.children}
    </UserNameContext.Provider>
  );
};
export default UserNameProvider;
