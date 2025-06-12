// Importa o hook useState do React para gerenciar estados locais
import { useState } from "react";

// Importa o hook personalizado useAuth do contexto de autenticação
import { useAuth } from "@/contexts/AuthContext";

// Importa o hook useNavigate do React Router para redirecionamentos
import { useNavigate } from "react-router-dom";

// Define o componente Login
export default function Login() {
  // Extrai a função de login do contexto de autenticação
  const { login } = useAuth();

  // Hook para navegação programática (redirecionamento)
  const navigate = useNavigate();

  // Estados locais para email, senha e mensagens de erro
  const [email, setEmail] = useState("admin@teste.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  // Função chamada ao enviar o formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previne o comportamento padrão do submit (recarregar página)
    try {
      // Tenta fazer login com as credenciais informadas
      await login(email, password);
      navigate("/"); // Se for bem-sucedido, redireciona para a página inicial
    } catch (err: any) {
      // Em caso de erro (ex: login inválido), exibe mensagem
      setError("Credenciais inválidas");
    }
  };

  return (
    // Container principal que centraliza a tela e define o fundo
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      
      {/* Card do formulário com sombra, borda, animação e responsividade */}
      <div className="bg-card shadow-lg rounded-2xl p-8 w-full max-w-md animate-fade-in border">
        
        {/* Título da tela */}
        <h1 className="text-2xl font-bold mb-6 text-center text-foreground">
          Acesso ao Sistema
        </h1>

        {/* Formulário de login */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Campo de e-mail */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Atualiza o estado com o valor digitado
              required
            />
          </div>

          {/* Campo de senha */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-muted-foreground mb-1">
              Senha
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
              required
            />
          </div>

          {/* Exibe mensagem de erro se houver */}
          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}

          {/* Botão de login com gradiente e efeito hover */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg text-white font-semibold gradient-primary hover:opacity-90 transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
