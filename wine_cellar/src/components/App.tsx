import { useState } from 'react';
import type { IVinho } from '../interfaces/IVinhos';
import Header from '../layout/Header';
import SideBar from '../layout/SideBar';
import Footer from '../layout/Footer';
import Dashboard from '../pages/Dashboard';
import Inventario from '../pages/Inventario';
import Cadastro from '../pages/Cadastro';

function App() {
  const [vinhos, setVinhos] = useState<IVinho[]>([
    { id: 1, nome: "Malbec Reserva", uva: "Malbec", safra: 2021, status: "estoque" },
    { id: 2, nome: "Cabernet Sauvignon", uva: "Cabernet", safra: 2020, status: "estoque" },
    { id: 3, nome: "Chardonnay Branco", uva: "Chardonnay", safra: 2022, status: "consumido" },
    { id: 4, nome: "Merlot Gran Reserva", uva: "Merlot", safra: 2018, status: "estoque" },
    { id: 5, nome: "Pinot Noir", uva: "Pinot Noir", safra: 2021, status: "estoque" },
    { id: 6, nome: "Sauvignon Blanc", uva: "Sauvignon Blanc", safra: 2023, status: "estoque" },
    { id: 7, nome: "Syrah Special", uva: "Syrah", safra: 2019, status: "consumido" },
    { id: 8, nome: "Tempranillo", uva: "Tempranillo", safra: 2020, status: "estoque" },
  ]);

  const [abaAtiva, setAbaAtiva] = useState<'dashboard' | 'inventario' | 'cadastro'>('dashboard');

  const marcarComoConsumido = (id: number) => {
    setVinhos(vinhos.map(v => v.id === id ? { ...v, status: 'consumido' } : v));
  };

  const adicionarVinho = (novo: IVinho) => {
    setVinhos([...vinhos, novo]);
  };

  return (
    <div className="container-fluid p-0 d-flex flex-column min-vh-100">
      <Header />
      <div className="row g-0 flex-grow-1">
        
        <SideBar setAba={setAbaAtiva} abaAtual={abaAtiva} />

        <main className="col-md-9 p-5 overflow-auto" style={{ backgroundColor: 'var(--bege-claro)' }}>
          {abaAtiva === 'dashboard' && <Dashboard vinhos={vinhos} />}
          {abaAtiva === 'inventario' && <Inventario vinhos={vinhos} onConsumir={marcarComoConsumido} />}
          {abaAtiva === 'cadastro' && <Cadastro onAdicionar={adicionarVinho} setAba={setAbaAtiva} />}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;