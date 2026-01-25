import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores/useAuthStore.ts";

const Index = () => {
  const { user } = useAuthStore();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Navigate to="/login" replace />;
};

export default Index;
