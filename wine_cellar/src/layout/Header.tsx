const Header = () => {
  return (
    <header className="bg-roxo-vinho text-white p-4 shadow-sm">
      <div className="container-fluid d-flex align-items-center">
        <i 
          className="bi bi-cup-straw me-3 text-white" 
          style={{ 
            fontSize: '2rem', 
            opacity: '0.9'
          }}
        ></i>
        <h1 className="m-0 fw-bold">WineCellar Manager</h1>
      </div>
    </header>
  );
};

export default Header;