import { Button, Center, Stack, Title } from "@mantine/core";
import { Route, Routes, useNavigate } from "react-router-dom";
import Expenses from "./components/Expenses";
import Form from "./components/Form";
import Auth from "./pages/Auth";
import ProtectedRoute from "./utils/ProtectedRoute";
import Profile from "./pages/Profile";
import supabase from "./utils/SupabaseClient";

function App() {
  const navigate = useNavigate();
  return (
    <ProtectedRoute>
      <Center style={{ height: "100vh" }}>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route
            exact
            path="/"
            element={
              <Stack align="center">
                <Title>Only Expense</Title>
                <Form />
                <Expenses />
                <Button
                  variant="light"
                  color="red"
                  uppercase
                  onClick={async () => {
                    const { error } = await supabase.auth.signOut();
                    navigate("/auth");
                  }}
                >
                  Log Out
                </Button>
              </Stack>
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Center>
    </ProtectedRoute>
  );
}

export default App;
