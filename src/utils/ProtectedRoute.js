import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const {user} = useUserAuth()

  useEffect(() => {
    console.log({user})
    if (!user) {
      navigate('/auth')
      return
    }
    navigate('/login')
  }, [user]);
  return children;
}

export default ProtectedRoute;
