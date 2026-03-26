export interface IVinho {
  id: number;
  nome: string;
  uva: string;
  safra: number;
  status: "estoque" | "consumido";
}