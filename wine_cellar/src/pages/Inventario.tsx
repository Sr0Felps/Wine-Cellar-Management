import type { IVinho } from '../interfaces/IVinhos';
import CardVinho from '../components/CardVinho';

interface InventarioProps {
  vinhos: IVinho[];
  onConsumir: (id: number) => void;
}

const Inventario = ({ vinhos, onConsumir }: InventarioProps) => {
  // Filtramos a lista original em duas sub-listas
  const vinhosEmEstoque = vinhos.filter(v => v.status === 'estoque');
  const vinhosConsumidos = vinhos.filter(v => v.status === 'consumido');

  return (
    <section>
      {/* Secção de Vinhos Disponíveis */}
      <div className="mb-5">
        <h2 className="mb-4 d-flex align-items-center" style={{ color: 'var(--roxo-vinho)' }}>
          <i className="bi bi- box-seam me-2"></i> Disponíveis na Adega
        </h2>
        <hr className="mb-4" style={{ color: 'var(--roxo-vinho)', opacity: 0.2 }} />
        
        <div className="row g-4">
          {vinhosEmEstoque.length > 0 ? (
            vinhosEmEstoque.map(vinho => (
              <CardVinho key={vinho.id} vinho={vinho} onConsumir={onConsumir} />
            ))
          ) : (
            <div className="col-12 text-muted italic p-3 bg-white rounded border border-dashed">
              Não há vinhos em estoque no momento.
            </div>
          )}
        </div>
      </div>

      {/* Secção de Histórico (Vinhos Consumidos) */}
      {vinhosConsumidos.length > 0 && (
        <div className="mt-5 pt-4">
          <h3 className="mb-4 text-muted d-flex align-items-center">
            <i className="bi bi-clock-history me-2"></i> Histórico de Consumo
          </h3>
          <div className="row g-4">
            {vinhosConsumidos.map(vinho => (
              <CardVinho key={vinho.id} vinho={vinho} onConsumir={onConsumir} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Inventario;