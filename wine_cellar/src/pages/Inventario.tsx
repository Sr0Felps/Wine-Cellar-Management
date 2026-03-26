import type { IVinho } from '../interfaces/IVinhos';
import CardVinho from '../components/CardVinho';

interface InventarioProps {
  vinhos: IVinho[];
  onConsumir: (id: number) => void;
}

const Inventario = ({ vinhos, onConsumir }: InventarioProps) => {
  return (
    <section>
      <h3>Minha Adega</h3>
      <div className="row mt-3">
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