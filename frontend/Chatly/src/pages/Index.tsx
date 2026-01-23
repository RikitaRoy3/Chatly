import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

const Index = () => {
  const { user } = useAuthStore();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Navigate to="/login" replace />;
};

export default Index;
