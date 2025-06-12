import { Produto } from "../types/produto";

const mockProdutos: Produto[] = [
  { id: "1", nome: "Areia Fina", categoria: "Areia", estoque: 120 },
  { id: "2", nome: "Brita 01", categoria: "Brita", estoque: 80 },
  { id: "3", nome: "Cimento CP II", categoria: "Cimento", estoque: 45 },
];

export const produtoService = {
  getProdutos: async (): Promise<Produto[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockProdutos), 500);
    });
  },
};
