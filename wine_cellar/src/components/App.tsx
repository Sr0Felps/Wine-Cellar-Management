import { useState } from 'react'
import type { IVinho } from '../interfaces/IVinhos'
import Header from '../layout/Header'
import Sidebar from '../layout/SideBar'
import Footer from '../layout/Footer'
import Dashboard from '../pages/Dashboard'
import Inventario from '../pages/Inventario'

function App() {
  const [vinhos, setVinhos] = useState<IVinho[]>([
    { id: 1, nome: "Malbec Reserva", uva: "Malbec", safra: 2021, status: "estoque" },
    { id: 2, nome: "Cabernet Sauvignon", uva: "Cabernet", safra: 2020, status: "estoque" },
    { id: 3, nome: "Chardonnay Branco", uva: "Chardonnay", safra: 2022, status: "consumido" },
  ]);

  const marcarComoConsumido = (id: number) => {
    setVinhos(vinhos.map(v => v.id === id ? { ...v, status: 'consumido' } : v));
  };

  return (
    <div className="container-fluid p-0 d-flex flex-column vh-100">
      <Header />
      <div className="row g-0 flex-grow-1">
        <Sidebar />
        <main className="col-md-9 p-5">
          <Dashboard vinhos={vinhos} />
          <hr className="my-5" />
          <Inventario vinhos={vinhos} onConsumir={marcarComoConsumido} />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App