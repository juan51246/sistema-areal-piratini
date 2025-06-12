import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  FileText, 
  Users, 
  DollarSign, 
  Settings,
  TrendingUp,
  Calculator
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: BarChart3,
    group: "Principal"
  },
  {
    title: "Estoque",
    url: "/estoque",
    icon: Package,
    group: "Gestão"
  },
  {
    title: "Vendas",
    url: "/vendas",
    icon: ShoppingCart,
    group: "Gestão"
  },
  {
    title: "Pedidos",
    url: "/pedidos",
    icon: FileText,
    group: "Gestão"
  },
  {
    title: "Clientes",
    url: "/clientes",
    icon: Users,
    group: "Gestão"
  },
  {
    title: "Comissões",
    url: "/comissoes",
    icon: TrendingUp,
    group: "Vendas"
  },
  {
    title: "Financeiro",
    url: "/financeiro",
    icon: DollarSign,
    group: "Financeiro"
  },
  {
    title: "Fiscal",
    url: "/fiscal",
    icon: Calculator,
    group: "Financeiro"
  },
  {
    title: "Relatórios",
    url: "/relatorios",
    icon: BarChart3,
    group: "Análise"
  },
  {
    title: "Configurações",
    url: "/configuracoes",
    icon: Settings,
    group: "Sistema"
  }
];

const groupedItems = menuItems.reduce((acc, item) => {
  if (!acc[item.group]) {
    acc[item.group] = [];
  }
  acc[item.group].push(item);
  return acc;
}, {} as Record<string, typeof menuItems>);

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-border/50">
      <SidebarHeader className="p-6 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
            <Package className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">ArealPiratini</h2>
            <p className="text-xs text-muted-foreground">Sistema de Gestão</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        {Object.entries(groupedItems).map(([group, items]) => (
          <SidebarGroup key={group}>
            <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              {group}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => {
                  const isActive = location.pathname === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`transition-all duration-200 ${
                          isActive 
                            ? 'bg-accent text-accent-foreground border-l-2 border-primary' 
                            : 'hover:bg-accent/50 hover:text-accent-foreground'
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-3 px-3 py-2 rounded-md">
                          <item.icon className={`w-4 h-4 ${isActive ? 'text-primary' : ''}`} />
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border/50">
        <div className="text-xs text-muted-foreground text-center">
          © 2025 ArealPiratini V0.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
