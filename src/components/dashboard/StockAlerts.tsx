
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, TrendingDown } from "lucide-react";

const stockAlerts = [
  { id: 1, product: "Notebook Dell Inspiron", stock: 2, minimum: 5, status: "critical" },
  { id: 2, product: "Mouse Logitech MX", stock: 8, minimum: 15, status: "warning" },
  { id: 3, product: "Teclado Mecânico RGB", stock: 3, minimum: 10, status: "critical" },
  { id: 4, product: "Monitor 24'' Full HD", stock: 12, minimum: 20, status: "warning" },
  { id: 5, product: "Webcam HD 1080p", stock: 1, minimum: 8, status: "critical" },
];

export function StockAlerts() {
  return (
    <Card className="col-span-3 transition-all duration-200 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <AlertTriangle className="w-5 h-5 text-warning" />
          Alertas de Estoque
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Produtos com estoque baixo que precisam de atenção
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {stockAlerts.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center gap-3">
                  <TrendingDown className={`w-4 h-4 ${
                    alert.status === 'critical' ? 'text-destructive' : 'text-warning'
                  }`} />
                  <div>
                    <p className="font-medium text-foreground text-sm">{alert.product}</p>
                    <p className="text-xs text-muted-foreground">
                      Estoque: {alert.stock} | Mínimo: {alert.minimum}
                    </p>
                  </div>
                </div>
                <Badge 
                  variant={alert.status === 'critical' ? 'destructive' : 'secondary'}
                  className="text-xs"
                >
                  {alert.status === 'critical' ? 'Crítico' : 'Baixo'}
                </Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
