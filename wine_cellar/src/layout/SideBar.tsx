const Sidebar = () => {
  return (
    <aside className="col-md-3 bg-light border-end vh-100 p-4">
      <nav className="nav flex-column gap-2">
        
        <button className="btn btn-primary text-start">📊 Dashboard</button>
        <button className="btn btn-outline-secondary text-start">📦 Inventário</button>
        <button className="btn btn-outline-secondary text-start">➕ Novo Vinho</button>
      </nav>
    </aside>
  );
};

export default Sidebar;