
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Header } from "@/components/layout/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Layout principal com sidebar
function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          } />
          <Route path="/estoque" element={
            <AppLayout>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Gestão de Estoque</h1>
                <p className="text-muted-foreground mt-2">Módulo em desenvolvimento</p>
              </div>
            </AppLayout>
          } />
          <Route path="/vendas" element={
            <AppLayout>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Gestão de Vendas</h1>
                <p className="text-muted-foreground mt-2">Módulo em desenvolvimento</p>
              </div>
            </AppLayout>
          } />
          <Route path="/pedidos" element={
            <AppLayout>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Controle de Pedidos</h1>
                <p className="text-muted-foreground mt-2">Módulo em desenvolvimento</p>
              </div>
            </AppLayout>
          } />
          <Route path="/clientes" element={
            <AppLayout>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Gestão de Clientes</h1>
                <p className="text-muted-foreground mt-2">Módulo em desenvolvimento</p>
              </div>
            </AppLayout>
          } />
          <Route path="/comissoes" element={
            <AppLayout>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Controle de Comissões</h1>
                <p className="text-muted-foreground mt-2">Módulo em desenvolvimento</p>
              </div>
            </AppLayout>
          } />
          <Route path="/financeiro" element={
            <AppLayout>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Gestão Financeira</h1>
                <p className="text-muted-foreground mt-2">Módulo em desenvolvimento</p>
              </div>
            </AppLayout>
          } />
          <Route path="/fiscal" element={
            <AppLayout>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Gestão Fiscal</h1>
                <p className="text-muted-foreground mt-2">Módulo em desenvolvimento</p>
              </div>
            </AppLayout>
          } />
          <Route path="/relatorios" element={
            <AppLayout>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Relatórios</h1>
                <p className="text-muted-foreground mt-2">Módulo em desenvolvimento</p>
              </div>
            </AppLayout>
          } />
          <Route path="/configuracoes" element={
            <AppLayout>
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Configurações</h1>
                <p className="text-muted-foreground mt-2">Módulo em desenvolvimento</p>
              </div>
            </AppLayout>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
