import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ProdutoModalProps {
  open: boolean;
  onClose: () => void;
  modo: "novo" | "editar";
  produto?: any; // depois substituímos por um tipo real
}

export default function ProdutoModal({ open, onClose, modo, produto }: ProdutoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{modo === "novo" ? "Novo Produto" : "Editar Produto"}</DialogTitle>
        </DialogHeader>

        <form className="space-y-4 mt-4">
          <Input placeholder="Nome do produto" defaultValue={produto?.nome || ""} />
          <Input placeholder="Código" defaultValue={produto?.codigo || ""} />
          <Input placeholder="Preço" type="number" defaultValue={produto?.preco || ""} />

          <Button type="submit" className="w-full">Salvar</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
