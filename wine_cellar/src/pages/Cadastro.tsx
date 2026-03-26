import { useState } from 'react';
import type { IVinho } from '../interfaces/IVinhos';

interface CadastroProps {
  onAdicionar: (novoVinho: IVinho) => void;
  setAba: (aba: 'dashboard' | 'inventario' | 'cadastro') => void;
}

const Cadastro = ({ onAdicionar, setAba }: CadastroProps) => {
  const [nome, setNome] = useState('');
  const [uva, setUva] = useState('');
  const [safra, setSafra] = useState(new Date().getFullYear());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const novoVinho: IVinho = {
      id: Math.random(),
      nome,
      uva,
      safra,
      status: 'estoque'
    };

    onAdicionar(novoVinho);
    setAba('inventario');
  };

  return (
    <section>
      <h2 className="mb-4">Cadastrar Novo Vinho</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Nome do Vinho</label>
          <input 
            type="text" 
            className="form-control" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Uva</label>
          <input 
            type="text" 
            className="form-control" 
            value={uva} 
            onChange={(e) => setUva(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Safra (Ano)</label>
          <input 
            type="number" 
            className="form-control" 
            value={safra} 
            onChange={(e) => setSafra(Number(e.target.value))} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Salvar na Adega</button>
      </form>
    </section>
  );
};

export default Cadastro;