
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", vendas: 65000, meta: 60000 },
  { name: "Fev", vendas: 72000, meta: 65000 },
  { name: "Mar", vendas: 68000, meta: 70000 },
  { name: "Abr", vendas: 85000, meta: 75000 },
  { name: "Mai", vendas: 92000, meta: 80000 },
  { name: "Jun", vendas: 88000, meta: 85000 },
];

export function SalesChart() {
  return (
    <Card className="col-span-4 transition-all duration-200 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-foreground">Vendas vs Meta</CardTitle>
        <CardDescription className="text-muted-foreground">
          Comparativo mensal do desempenho de vendas
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
            />
            <YAxis 
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                color: 'hsl(var(--foreground))'
              }}
              formatter={(value) => [`R$ ${value?.toLocaleString()}`, '']}
            />
            <Line 
              type="monotone" 
              dataKey="vendas" 
              stroke="hsl(var(--success))" // Alterado de --primary para --success (verde)
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--success))', strokeWidth: 2, r: 4 }}
              name="Vendas Realizadas"
            />
            <Line 
              type="monotone" 
              dataKey="meta" 
              stroke="hsl(var(--muted-foreground))" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: 'hsl(var(--muted-foreground))', strokeWidth: 2, r: 3 }}
              name="Meta"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
