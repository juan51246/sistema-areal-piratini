import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Building2 } from "lucide-react"; // mesmo ícone do Sidebar

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch {
      setError("Usuário ou senha inválido");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted via-background to-muted px-4">
      <div className="bg-card shadow-2xl rounded-2xl p-10 w-full max-w-md border animate-fade-in">
        <div className="flex flex-col items-center mb-6">
          <Building2 className="w-10 h-10 text-primary mb-2" />
          <h1 className="text-xl font-semibold text-primary tracking-wide">ArealPiratini</h1>
          <p className="text-muted-foreground text-sm">Sistema de Gestão</p>
        </div>

        <h2 className="text-2xl font-bold text-center text-foreground mb-6">
          Acesso ao Sistema
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-muted-foreground mb-1">
              Senha
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center mt-2">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 rounded-lg text-white font-semibold bg-primary hover:bg-primary/90 transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
