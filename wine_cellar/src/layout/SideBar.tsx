interface SideBarProps {
  setAba: (aba: 'dashboard' | 'inventario' | 'cadastro') => void;
  abaAtual: string;
}

const SideBar = ({ setAba, abaAtual }: SideBarProps) => {
  return (
    <aside className="col-md-3 border-end p-4 flex-shrink-0" style={{ backgroundColor: 'var(--bege-creme)', minHeight: '100%' }}>
      <nav className="nav flex-column gap-3">
        <button 
          className={`btn text-start shadow-sm fw-bold ${abaAtual === 'dashboard' ? 'btn-roxo' : 'btn-outline-vinho'}`}
          onClick={() => setAba('dashboard')}
        >
          <i className="bi bi-speedometer2 me-2"></i> Dashboard
        </button>
        <button 
          className={`btn text-start shadow-sm fw-bold ${abaAtual === 'inventario' ? 'btn-roxo' : 'btn-outline-vinho'}`}
          onClick={() => setAba('inventario')}
        >
          <i className="bi bi-box-seam me-2"></i> Inventário
        </button>
        <button 
          className={`btn text-start shadow-sm fw-bold ${abaAtual === 'cadastro' ? 'btn-roxo' : 'btn-outline-vinho'}`}
          onClick={() => setAba('cadastro')}
        >
          <i className="bi bi-plus-circle me-2"></i> Novo Vinho
        </button>
      </nav>
    </aside>
  );
};

export default SideBar;