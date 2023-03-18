import { useToggle } from '@mantine/hooks';
import { createContext } from 'react';

export const ViewToggleContext = createContext();

export default function ToggleProvider(props) {
  const [isSettingsView, toggle] = useToggle();


  return (
    <ViewToggleContext.Provider value={{ isSettingsView, toggle }}>
      {props.children}
    </ViewToggleContext.Provider>
  );
}
