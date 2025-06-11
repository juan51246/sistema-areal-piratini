
import { MetricCard } from "@/components/dashboard/MetricCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { StockAlerts } from "@/components/dashboard/StockAlerts";
import { RecentSales } from "@/components/dashboard/RecentSales";
import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package,
  TrendingUp,
  TrendingDown
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Visão geral do seu negócio em tempo real
        </p>
      </div>

      {/* Métricas principais */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Receita Total"
          value="R$ 245.890"
          change="+12,5% em relação ao mês anterior"
          changeType="positive"
          icon={DollarSign}
          gradient={true}
        />
        <MetricCard
          title="Vendas Hoje"
          value="156"
          change="+8,2% desde ontem"
          changeType="positive"
          icon={ShoppingCart}
        />
        <MetricCard
          title="Clientes Ativos"
          value="2.847"
          change="+5,7% este mês"
          changeType="positive"
          icon={Users}
        />
        <MetricCard
          title="Produtos em Estoque"
          value="1.249"
          change="-2,3% produtos em baixa"
          changeType="negative"
          icon={Package}
        />
      </div>

      {/* Gráficos e dados principais */}
      <div className="grid gap-4 md:grid-cols-7">
        <SalesChart />
        <StockAlerts />
      </div>

      {/* Dados recentes */}
      <div className="grid gap-4 md:grid-cols-7">
        <RecentSales />
        
        <div className="col-span-4 grid gap-4 md:grid-cols-2">
          <MetricCard
            title="Ticket Médio"
            value="R$ 287,50"
            change="+4,8% este mês"
            changeType="positive"
            icon={TrendingUp}
          />
          <MetricCard
            title="Taxa de Conversão"
            value="3.2%"
            change="-0,5% esta semana"
            changeType="negative"
            icon={TrendingDown}
          />
        </div>
      </div>
    </div>
  );
}
