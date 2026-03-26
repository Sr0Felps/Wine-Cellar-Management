import { useState } from 'react'

// 1. Interface TypeScript (Requisito Obrigatório: Tipagem)
interface IVinho {
  id: number;
  nome: string;
  uva: string;
  status: 'estoque' | 'consumido';
}

function App() {
  // 2. Lógica de Estado (Requisito: Dashboard Dinâmico)
  const [vinhos, setVinhos] = useState<IVinho[]>([
    { id: 1, nome: "Malbec Reserva", uva: "Malbec", status: "estoque" },
    { id: 2, nome: "Cabernet Sauvignon", uva: "Cabernet", status: "estoque" },
    { id: 3, nome: "Chardonnay Branco", uva: "Chardonnay", status: "consumido" },
  ]);

  // Função para mudar o status e atualizar o Dashboard imediatamente
  const marcarComoConsumido = (id: number) => {
    setVinhos(vinhos.map(v => v.id === id ? { ...v, status: 'consumido' } : v));
  };

  // Cálculos para o Dashboard
  const totalEstoque = vinhos.filter(v => v.status === 'estoque').length;

  return (
    <div className="container-fluid p-0">
      {/* HEADER: Tag obrigatória */}
      <header className="bg-dark text-white p-4 shadow">
        <h1>WineCellar Manager 🍷</h1>
      </header>

      <div className="row g-0">
        {/* ASIDE: Tag obrigatória + Grid 3/12 (Assimétrico no Desktop) */}
        <aside className="col-md-3 bg-light border-end vh-100 p-4">
          <nav className="nav flex-column gap-2">
            <button className="btn btn-primary text-start">📊 Dashboard</button>
            <button className="btn btn-outline-secondary text-start">📦 Inventário</button>
            <button className="btn btn-outline-secondary text-start">➕ Novo Vinho</button>
          </nav>
        </aside>

        {/* MAIN: Tag obrigatória + Grid 9/12 */}
        <main className="col-md-9 p-5">
          <section>
            <h2 className="mb-4">Painel de Controle</h2>
            
            {/* Dashboard com Contador Dinâmico */}
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
                <div className="col-md-6 col-lg-4 mb-4" key={vinho.id}>
                  <div className={`card h-100 ${vinho.status === 'consumido' ? 'opacity-50' : ''}`}>
                    <div className="card-body">
                      <h5 className="card-title">{vinho.nome}</h5>
                      <p className="card-text text-muted">Uva: {vinho.uva}</p>
                      <span className={`badge mb-3 ${vinho.status === 'estoque' ? 'bg-success' : 'bg-secondary'}`}>
                        {vinho.status === 'estoque' ? 'Em Estoque' : 'Consumido'}
                      </span>
                      
                      {vinho.status === 'estoque' && (
                        <button 
                          className="btn btn-danger w-100"
                          onClick={() => marcarComoConsumido(vinho.id)}
                        >
                          Abrir Garrafa
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* ADDRESS: Tag obrigatória para identificação no rodapé */}
      <footer className="bg-dark text-white p-4 mt-auto">
        <address className="mb-0 text-center">
          <strong>Filipe Costa Junqueira</strong><br />
          Data: 19/03/2026<br />
          Disciplina: Desenvolvimento de Software WEB (Prof. Alexandre Almeida) - PUC Goiás
        </address>
      </footer>
    </div>
  )
}

export default App