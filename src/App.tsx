// src/App.tsx

// Importa componentes de notificação personalizados
import { Toaster } from "@/components/ui/toaster"; // Um sistema de toast (mensagens temporárias)
import { Toaster as Sonner } from "@/components/ui/sonner"; // Outro sistema de toast (possivelmente com estilo diferente)

// Importa provedor de tooltips (dicas visuais ao passar o mouse)
import { TooltipProvider } from "@/components/ui/tooltip";

// Importa React Query para gerenciamento de requisições e cache de dados
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Importa ferramentas de roteamento do React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importa o contexto da sidebar e componentes de layout
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Header } from "@/components/layout/Header";

// Importa páginas da aplicação
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Importa rota protegida (para controle de autenticação)
import { PrivateRoute } from "@/components/PrivateRoute";

// Importa o contexto de autenticação
import { AuthProvider } from "./contexts/AuthContext";

//Importa a lista de produtos -- exportação padrão
import ListaProdutos from "./modules/estoque/pages/ListaProdutos"
// Cria uma instância do client para o React Query
const queryClient = new QueryClient();

// Define o layout base da aplicação, com Sidebar e Header
function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {/* Barra lateral esquerda */}
        <AppSidebar />

        {/* Conteúdo principal (header + conteúdo dinâmico) */}
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}

// Função principal da aplicação
const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* Envolve a aplicação com o provedor de tooltips */}
    <TooltipProvider>

      {/* Componente de toast notifications */}
      <Toaster />
      <Sonner />

      {/* Envolvimento com React Router para controle de rotas */}
      <BrowserRouter>
        {/* Provedor de autenticação */}
        <AuthProvider>
          <Routes>
            {/* Rota pública de login */}
            <Route path="/login" element={<Login />} />

            {/* Rota raiz protegida (Dashboard) */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <AppLayout>
                    <Dashboard />
                  </AppLayout>
                </PrivateRoute>
              }
            />

            <Route
              path="/estoque"
              element={
                <PrivateRoute>
                  <AppLayout>
                    <ListaProdutos />
                  </AppLayout>
                </PrivateRoute>
              }
            />

            {/* Protege e declara outras rotas de módulos */}
            {[
              "estoque",
              "vendas",
              "pedidos",
              "clientes",
              "comissoes",
              "financeiro",
              "fiscal",
              "relatorios",
              "configuracoes",
            ].map((path) => (
              <Route
                key={path}
                path={`/${path}`}
                element={
                  <PrivateRoute>
                    <AppLayout>
                      {/* Tela temporária para módulos ainda não desenvolvidos */}
                      <div className="p-8 text-center">
                        <h1 className="text-2xl font-bold">
                          {`Módulo: ${path[0].toUpperCase() + path.slice(1)}`}
                        </h1>
                        <p className="text-muted-foreground mt-2">
                          Módulo em desenvolvimento
                        </p>
                      </div>
                    </AppLayout>
                  </PrivateRoute>
                }
              />
            ))}

            {/* Rota curinga: qualquer rota não reconhecida vai para NotFound */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Exporta o componente principal
export default App;
