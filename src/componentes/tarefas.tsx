import { useState } from 'react';
import './style/tarefas.css';
import NovaTarefa from './novatarefa';

export interface Tarefa {
  descricao: string;
  periodo: string;
}

const Tarefas: React.FC = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const adicionarTarefa = (tarefa: Tarefa) => {
    setTarefas((prev) => [...prev, tarefa]);
  };

  return (
    <div className="tarefas">
      <h2><em>Lista de tarefas</em></h2>
      <NovaTarefa onAdicionarTarefa={adicionarTarefa} />
      <ul aria-label="Lista de tarefas">
        {tarefas.map((t, index) => (
          <li key={index}>
            {t.descricao} - <strong>{t.periodo}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tarefas;