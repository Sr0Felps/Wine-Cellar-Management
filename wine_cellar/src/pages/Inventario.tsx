import type { IVinho } from '../interfaces/IVinhos';
import CardVinho from '../components/CardVinho';

interface InventarioProps {
  vinhos: IVinho[];
  onConsumir: (id: number) => void;
}

const Inventario = ({ vinhos, onConsumir }: InventarioProps) => {
  return (
    <section>
      <h2 className = "mb-4" style={{ color: 'var(--roxo-vinho)' }}>Minha Adega</h2>
      <div className="row g-4">
        {vinhos.map(vinho => (
          <CardVinho 
            key={vinho.id} 
            vinho={vinho} 
            onConsumir={onConsumir} 
          />
        ))}
      </div>
    </section>
  );
};

export default Inventario;