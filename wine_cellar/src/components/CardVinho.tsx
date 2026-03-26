import type { IVinho } from "../interfaces/IVinhos";

interface CardVinhoProps {
  vinho: IVinho;
  onConsumir: (id: number) => void;
}

const CardVinho = ({ vinho, onConsumir }: CardVinhoProps) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className={`card h-100 ${vinho.status === 'consumido' ? 'opacity-50' : ''}`}>
        <div className="card-body">
          <h5 className="card-title">{vinho.nome}</h5>
          <p className="card-text text-muted">Uva: {vinho.uva} | Safra: {vinho.safra}</p>
          <span className={`badge mb-3 ${vinho.status === 'estoque' ? 'bg-success' : 'bg-secondary'}`}>
            {vinho.status === 'estoque' ? 'Em Estoque' : 'Consumido'}
          </span>
          
          {vinho.status === 'estoque' && (
            <button 
              className="btn btn-danger w-100"
              onClick={() => onConsumir(vinho.id)}
            >
              Abrir Garrafa
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardVinho;