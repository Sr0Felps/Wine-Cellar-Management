import { useState } from 'react'
import type { IVinho } from '../interfaces/IVinhos'
import CardVinho from '../components/CardVinho'
import Header from '../layout/Header'
import Sidebar from '../layout/SideBar'

function App() {
  const [vinhos, setVinhos] = useState<IVinho[]>([
    { id: 1, nome: "Malbec Reserva", uva: "Malbec", safra: 2021, status: "estoque" },
    { id: 2, nome: "Cabernet Sauvignon", uva: "Cabernet", safra: 2020, status: "estoque" },
    { id: 3, nome: "Chardonnay Branco", uva: "Chardonnay", safra: 2022, status: "consumido" },
  ]);

  const marcarComoConsumido = (id: number) => {
    setVinhos(vinhos.map(v => v.id === id ? { ...v, status: 'consumido' } : v));
  };

  const totalEstoque = vinhos.filter(v => v.status === 'estoque').length;

  return (
    <div className="container-fluid p-0">
      <Header />

      <div className="row g-0">
        <Sidebar />

        <main className="col-md-9 p-5">
          <section>
            <h2 className="mb-4">Painel de Controle</h2>
            <div className="row mb-5">
              <div className="col-md-4">
                <div className="card border-primary shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="card-title text-muted">Garrafas em Estoque</h5>
                    <p className="display-4 fw-bold text-primary">{totalEstoque}</p>
                  </div>
                </div>
              </div>
            </div>

            <h3>Minha Adega</h3>
            <div className="row mt-3">
              {vinhos.map(vinho => (
                <CardVinho 
                  key={vinho.id} 
                  vinho={vinho} 
                  onConsumir={marcarComoConsumido} 
                />
              ))}
            </div>
          </section>
        </main>
      </div>

      <footer className="bg-dark text-white p-4 mt-auto">
        <address className="mb-0 text-center">
          <strong>Filipe Costa Junqueira</strong><br />
          ADS - PUC Goiás | Prof. Alexandre Almeida
        </address>
      </footer>
    </div>
  )
}

export default App