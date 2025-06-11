
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redireciona para login se não estiver autenticado
    // Em um sistema real, verificaria o token de autenticação
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  return null; // Este componente só redireciona
};

export default Index;
