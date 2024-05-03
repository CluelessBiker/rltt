import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { User } from '../types/User';

type SetCurrentUserType = Dispatch<SetStateAction<User | null>>;

export const CurrentUserContext = createContext<User | null>(null);
export const SetCurrentUserContext = createContext<SetCurrentUserType | null>(
  null,
);

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

type Props = {
  children: ReactNode;
};

export const CurrentUserProvider: FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};
