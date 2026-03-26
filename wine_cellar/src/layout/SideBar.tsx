interface SideBarProps {
  setAba: (aba: 'dashboard' | 'inventario' | 'cadastro') => void;
  abaAtual: string;
}

const SideBar = ({ setAba, abaAtual }: SideBarProps) => {
  return (
    <aside className="col-md-3 bg-light border-end vh-100 p-4">
      <nav className="nav flex-column gap-2">
        <button 
          className={`btn text-start ${abaAtual === 'dashboard' ? 'btn-primary' : 'btn-outline-secondary'}`}
          onClick={() => setAba('dashboard')}
        >
          📊 Dashboard
        </button>
        <button 
          className={`btn text-start ${abaAtual === 'inventario' ? 'btn-primary' : 'btn-outline-secondary'}`}
          onClick={() => setAba('inventario')}
        >
          📦 Inventário
        </button>
        <button 
           className={`btn text-start ${abaAtual === 'cadastro' ? 'btn-primary' : 'btn-outline-secondary'}`}
           onClick={() => setAba('cadastro')}
          >
            ➕ Novo Vinho
        </button>
      </nav>
    </aside>
  );
};

export default SideBar;