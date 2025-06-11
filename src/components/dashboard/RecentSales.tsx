
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const recentSales = [
  {
    id: 1,
    customer: "Maria Silva",
    email: "maria@email.com",
    amount: "R$ 2.459,00",
    status: "completed",
    time: "2 minutos atrás"
  },
  {
    id: 2,
    customer: "João Santos",
    email: "joao@email.com",
    amount: "R$ 1.299,00",
    status: "pending",
    time: "15 minutos atrás"
  },
  {
    id: 3,
    customer: "Ana Costa",
    email: "ana@email.com",
    amount: "R$ 3.199,00",
    status: "completed",
    time: "1 hora atrás"
  },
  {
    id: 4,
    customer: "Pedro Lima",
    email: "pedro@email.com",
    amount: "R$ 899,00",
    status: "processing",
    time: "2 horas atrás"
  },
  {
    id: 5,
    customer: "Clara Mendes",
    email: "clara@email.com",
    amount: "R$ 4.599,00",
    status: "completed",
    time: "3 horas atrás"
  }
];

export function RecentSales() {
  const getStatusBadge = (status: string) => {
    const statusMap = {
      completed: { label: "Concluída", variant: "default" as const },
      pending: { label: "Pendente", variant: "secondary" as const },
      processing: { label: "Processando", variant: "outline" as const }
    };
    return statusMap[status as keyof typeof statusMap] || statusMap.pending;
  };

  return (
    <Card className="col-span-3 transition-all duration-200 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-foreground">Vendas Recentes</CardTitle>
        <CardDescription className="text-muted-foreground">
          Últimas transações realizadas no sistema
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {recentSales.map((sale) => {
              const statusBadge = getStatusBadge(sale.status);
              return (
                <div key={sale.id} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-9 h-9">
                      <AvatarImage src={`/placeholder.svg`} />
                      <AvatarFallback className="bg-primary/10 text-primary text-xs">
                        {sale.customer.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground text-sm">{sale.customer}</p>
                      <p className="text-xs text-muted-foreground">{sale.email}</p>
                      <p className="text-xs text-muted-foreground">{sale.time}</p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="font-semibold text-foreground">{sale.amount}</p>
                    <Badge variant={statusBadge.variant} className="text-xs">
                      {statusBadge.label}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
