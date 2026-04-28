import { useState } from "react";
import styles from './index.module.css';

export default function Atividade03() {
    const [acao, setAcao] = useState("Excluir"); 

    return (
        <div className={styles.container}>
            <h1>Ação selecionada: {acao}</h1>
            
            <div className={styles.containerBotoes}>
                <label 
                    onClick={() => setAcao("Cadastrar")} 
                    className={`${styles.botao} ${styles.btnVerde}`}
                >Cadastrar</label>

                <label 
                    onClick={() => setAcao("Editar")} 
                    className={`${styles.botao} ${styles.btnAzul}`}
                >Editar</label>

                <label 
                    onClick={() => setAcao("Listar")} 
                    className={`${styles.botao} ${styles.btnLaranja}`}
                >Listar</label>

                <label 
                    onClick={() => setAcao("Excluir")} 
                    className={`${styles.botao} ${styles.btnVermelho}`}
                >Excluir</label>

                <label 
                    onClick={() => setAcao("Cancelar")} 
                    className={`${styles.botao} ${styles.btnCinza}`}
                >Cancelar</label>
            </div>
        </div>
    );
}
