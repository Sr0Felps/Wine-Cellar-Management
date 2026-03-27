import type { IVinho } from '../interfaces/IVinhos';

interface DashboardProps {
  vinhos: IVinho[];
}

const Dashboard = ({ vinhos }: DashboardProps) => {
  const estoque = vinhos.filter(v => v.status === 'estoque').length;
  const consumidos = vinhos.filter(v => v.status === 'consumido').length;

  return (
    <section>
      <h2 className="mb-4" style={{ color: 'var(--roxo-vinho)' }}>Painel de Controle</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm border-0" style={{ backgroundColor: 'var(--roxo-vinho)', color: 'var(--bege-claro)' }}>
            <div className="card-body text-center p-5">
              <h5 className="text-uppercase opacity-75">Em Estoque</h5>
              <p className="display-2 fw-bold m-0">{estoque}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm border-0" style={{ backgroundColor: 'var(--bege-creme)', color: 'var(--roxo-vinho)', border: '2px solid var(--roxo-vinho) !important' }}>
            <div className="card-body text-center p-5">
              <h5 className="text-uppercase opacity-75">Consumidos</h5>
              <p className="display-2 fw-bold m-0">{consumidos}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;