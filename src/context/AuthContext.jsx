import supabase from "../utils/SupabaseClient";
import { useEffect, useState, createContext, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function getUser() {
    const { data, error } = await supabase.auth.getSession();
    data && console.log({ sessionData: data.session.user });
    error && console.log({ sessionError: error });
    setUser(data.session.user);
  }

  useEffect(() => {
    getUser();

    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      setUser(session?.user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(AuthContext);
}
