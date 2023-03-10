import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <ProtectedRoute>
        <Routes>
          <Route
            exact
            path="/"
            element={<Dashboard/>}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
    </ProtectedRoute>
  );
}

export default App;
