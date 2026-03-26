import type { IVinho } from '../interfaces/IVinhos';

interface DashboardProps {
  vinhos: IVinho[];
}

const Dashboard = ({ vinhos }: DashboardProps) => {
  const totalEstoque = vinhos.filter(v => v.status === 'estoque').length;
  const totalConsumido = vinhos.filter(v => v.status === 'consumido').length;

  return (
    <section>
      <h2 className="mb-4">Painel de Controle</h2>
      <div className="row mb-5 text-white">
        <div className="col-md-6">
          <div className="card bg-primary shadow-sm">
            <div className="card-body text-center">
              <h5>Garrafas em Estoque</h5>
              <p className="display-4 fw-bold">{totalEstoque}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card bg-secondary shadow-sm">
            <div className="card-body text-center">
              <h5>Total Consumido</h5>
              <p className="display-4 fw-bold">{totalConsumido}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;