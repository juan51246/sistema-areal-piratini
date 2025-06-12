// Caminho: src/modules/estoque/pages/ListaProdutos.tsx

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { produtoService } from "../services/produtoService";
import { Produto } from "../types/produto";
import ProdutoModal from "../components/ProdutoModal";

const [modalAberta, setModalAberta] = useState(false);
const [modoModal, setModoModal] = useState<"novo" | "editar">("novo");
const [produtoSelecionado, setProdutoSelecionado] = useState<any | null>(null);

export default function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [filtro, setFiltro] = useState("");

    useEffect(() => {
        const fetchProdutos = async () => {
            const data = await produtoService.getProdutos();
            setProdutos(data);
        };
        fetchProdutos();
    }, []);

    const produtosFiltrados = produtos.filter((p) =>
        p.nome.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Produtos em Estoque</h1>
                <Button
                    onClick={() => {
                        setModoModal("novo");
                        setProdutoSelecionado(null);
                        setModalAberta(true);
                    }}
                >
                    Novo Produto
                </Button>
            </div>

            <Input
                placeholder="Buscar produto..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className="max-w-sm"
            />

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Estoque</TableHead>
                        <TableHead>Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {produtosFiltrados.map((produto) => (
                        <TableRow key={produto.id}>
                            <TableCell>{produto.nome}</TableCell>
                            <TableCell>{produto.categoria}</TableCell>
                            <TableCell>{produto.estoque}</TableCell>
                            <TableCell>
                                <Button variant="outline" size="sm">Editar</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
