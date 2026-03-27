import { useState } from 'react';
import type { IVinho } from '../interfaces/IVinhos';

interface CadastroProps {
  onAdicionar: (novoVinho: IVinho) => void;
  setAba: (aba: 'dashboard' | 'inventario' | 'cadastro') => void;
}

const Cadastro = ({ onAdicionar, setAba }: CadastroProps) => {
  const [nome, setNome] = useState('');
  const [uva, setUva] = useState('');
  const [safra, setSafra] = useState<number>(new Date().getFullYear());
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
      <h2 className="mb-4" style={{ color: 'var(--roxo-vinho)' }}>Adicionar Rótulo</h2>
      <div className="card shadow-sm p-4 border-0" style={{ backgroundColor: 'var(--bege-creme)' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Nome do Vinho</label>
            <input type="text" className="form-control border-vinho" value={nome} onChange={e => setNome(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Uva / Variedade</label>
            <input type="text" className="form-control border-vinho" value={uva} onChange={e => setUva(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Safra</label>
            <input type="number" className="form-control border-vinho" value={safra} onChange={e => setSafra(Number(e.target.value))} required min={1900} max={new Date().getFullYear()}/>
          </div>
          <button type="submit" className="btn btn-roxo w-100 py-2 fw-bold">Salvar na Adega</button>
        </form>
      </div>
    </section>
  );
};

export default Cadastro;