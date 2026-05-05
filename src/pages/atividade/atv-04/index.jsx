import React, { useState } from 'react';
import styles from './index.module.css';

export default function ListaDeCompra() {
  const [itens, setItens] = useState([]);
  const [qtd, setQtd] = useState('');
  const [produto, setProduto] = useState('');

  const adicionarItem = () => {
    if (qtd.trim() && produto.trim()) {
      const novoItem = {
        id: Date.now(),
        qtd: qtd,
        nome: produto
      };
      setItens([...itens, novoItem]);
      
      setQtd('');
      setProduto('');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Atividade 4 - Lista de compra</h2>
      
      <div className={styles.inputGroup}>
        <input 
          type="text" 
          placeholder="Qtd" 
          className={styles.inputQtd}
          value={qtd}
          onChange={(e) => setQtd(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Produto..." 
          className={styles.inputProduto}
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
        />
        <button className={styles.addButton} onClick={adicionarItem}>
          Adicionar
        </button>
      </div>

      <div className={styles.list}>
        {itens.map((item) => (
          <div key={item.id} className={styles.listItem}>
            {item.qtd}x {item.nome}
          </div>
        ))}
      </div>
    </div>
  );
}
