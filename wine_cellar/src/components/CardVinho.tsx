import type { IVinho } from "../interfaces/IVinhos";

interface CardVinhoProps {
  vinho: IVinho;
  onConsumir: (id: number) => void;
}

const CardVinho = ({ vinho, onConsumir }: CardVinhoProps) => {
  return (
    <div className="col-md-4 mb-4">
      <div className={`card h-100 shadow-sm card-vinho ${vinho.status === 'consumido' ? 'opacity-50' : ''}`}>
        <div className="card-body">
          <h5 className="card-title fw-bold" style={{ color: 'var(--roxo-vinho)' }}>{vinho.nome}</h5>
          <p className="card-text">Uva: {vinho.uva}</p>
          <p className="text-muted">Safra: {vinho.safra}</p>
          {vinho.status === 'estoque' ? (
            <button className="btn btn-roxo w-100" onClick={() => onConsumir(vinho.id)}>Abrir</button>
          ) : (
            <span className="badge bg-secondary w-100 p-2">Consumido</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardVinho;